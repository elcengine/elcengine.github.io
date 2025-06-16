---
sidebar_position: 26
---

# Populate

Populate is a method that allows you to retrieve related documents from other collections based on references defined in your schema. The retrieved documents are automatically embedded into the results of your query.

This is particularly useful for fetching associated data without having to perform multiple queries manually as well as for reducing the number of queries made to the database. This uses `$lookup` under the hood, which is a MongoDB aggregation stage that allows you to join documents from different collections.

## Usage

### Type definitions

Population is a bit tricky to work with in Go due to its type system. Here we utilize the power of generics to define a flexible population structure that can work with any type of documents.


```go
type Kingdom struct {
	ID        primitive.ObjectID `json:"_id" bson:"_id"`
	Name      string             `json:"name" bson:"name"`
	CreatedAt time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt time.Time          `json:"updated_at" bson:"updated_at"`
}

type Monster struct {
	ID         primitive.ObjectID `json:"_id" bson:"_id"`
	Name       string             `json:"name" bson:"name"`
	Category   string             `json:"category,omitempty" bson:"category,omitempty"`
	CreatedAt  time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt  time.Time          `json:"updated_at" bson:"updated_at"`
}

type GenericBestiary[T any, Y any] struct {
	ID      primitive.ObjectID `json:"_id" bson:"_id"`
	Monster T                  `json:"monster" bson:"monster"`
	Kingdom Y                  `json:"kingdom" bson:"kingdom"`
}

type Bestiary = GenericBestiary[any, any]

type DetailedBestiary = GenericBestiary[Monster, Kingdom]

type PartiallyDetailedBestiary = GenericBestiary[Monster, primitive.ObjectID]

```

### Model definition

```go
BestiaryModel := elemental.NewModel[Bestiary]("Bestiary", elemental.NewSchema(map[string]elemental.Field{
	"Monster": {
		Type: elemental.ObjectID,
		Ref:  "Monster",
	},
	"Kingdom": {
		Type: elemental.ObjectID,
		Ref:  "Kingdom",
	},
}))
```

In the example above, we define a `Bestiary` model with two fields, `Monster` and `Kingdom`, which are references to other Elemental models. You can also directly provide a `Collection` attribute into a field instead of using the `Ref` attribute, which is a bit faster to work with and also allows to use a different collection name than the one registered in the referenced model.


### Querying with Populate

To use the `Populate` method, you can chain it to your query. The `Populate` method accepts a list of fields to populate and you can use it in a variety of ways depending on your preference. 

There is no limitation on the number of fields you can populate, and it can be chained alongside other Elemental query methods.

Note that with `Populate` we use the `ExecInto` method to retrieve the results into a custom type since the base type of the model is not sufficient to hold the populated data and may even fail to unmarshal the results correctly.

```go
var bestiaries []DetailedBestiary

BestiaryModel.Find().Populate("Monster", "Kingdom").ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate("monster", "kingdom").ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate("Monster").Populate("Kingdom").ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate("monster").Populate("kingdom").ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate("monster kingdom").ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate([]string{"Monster", "Kingdom"}).ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate(primitive.M{
    "path": "monster",
    "pipeline": []primitive.M{
        {"$addFields": primitive.M{
            "category": primitive.M{"$toLower": "$category"},
        }},
    },
}, "Kingdom").ExecInto(&bestiaries)

// or

BestiaryModel.Find().Populate(primitive.M{
    "path": "monster",
    "select": primitive.M{
        "name": 1,
        "category": 1,
    },
}).Populate("Kingdom").ExecInto(&bestiaries)
```

#### You can even just populate one field if you want to:

```go
var bestiaries []PartiallyDetailedBestiary

BestiaryModel.Find().Populate("Monster").ExecInto(&bestiaries)
```

### Creating a new document with a referenced document

When creating a new document with a reference to another document, you can directly pass the document as the value of the field. Elemental will automatically handle the reference and store the ObjectID of the referenced document.

```go
monster := MonsterModel.Create(Monster{
    Name: "Griffin",
    Category: "Beast",
}).Exec()

kingdom := KingdomModel.Create(Kingdom{
    Name: "Temeria",
}).Exec()

bestiary := BestiaryModel.Create(Bestiary{
    Monster: monster,
    Kingdom: kingdom,
}).ExecT()

fmt.Println("Bestiary created with ID:", bestiary.ID.Hex())
```