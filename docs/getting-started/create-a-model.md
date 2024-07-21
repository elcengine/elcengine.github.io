---
sidebar_position: 5
---

# Create a Model

Model creation is a part of the `elemental` core package which can be imported as follows:

```go
import "github.com/elcengine/elemental/core"
```

A model is the primary interface for interacting with your data. It represents a single instance of your data model and provides methods for querying data with ease. In Elemental, you can define a model using the `elemental` package.

```go
type Witcher struct {
	ID         primitive.ObjectID `json:"_id" bson:"_id"`
	Name       string             `json:"name" bson:"name"`
	Age        int                `json:"age" bson:"age"`
	Occupation string             `json:"occupation" bson:"occupation,omitempty"`
	Weapons    []string           `json:"weapons" bson:"weapons"`
	Retired    bool               `json:"retired" bson:"retired"`
	School     *string            `json:"school" bson:"school"`
	CreatedAt  time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt  time.Time          `json:"updated_at" bson:"updated_at"`
}
WitcherModel := elemental.NewModel[Witcher]("Witcher", schema)
```

## Using a Model

Once you have defined a model, you can use it to interact with your MongoDB collection. Here are some common operations you can perform with a model:

### Insert a Document

```go
witcher := WitcherModel.Create(Witcher{
	Name:       "Geralt of Rivia",
	Age:        100,
	Occupation: "Witcher",
	Weapons:    []string{"Silver Sword", "Steel Sword"},
	Retired:    false,
	School:     nil
}).Exec().(Witcher)

fmt.Println(witcher.ID) // The ObjectID of the newly created document
fmt.Println(witcher.CreatedAt) // The timestamp when the document was created
fmt.Println(witcher.UpdatedAt) // The timestamp when the document was last updated
```

### Find Documents

```go
witchers := WitcherModel.Find().Exec().([]Witcher)

for _, witcher := range witchers {
	fmt.Println(witcher.Name) // The name of each document
}
```

### Find a Document

```go
witcher := WitcherModel.FindOne(Witcher{
	Name: "Geralt of Rivia",
}).Exec().(*Witcher)

fmt.Println(witcher.ID) // The ObjectID of the found document
```

### Update a Document

```go
witcher := WitcherModel.FindOne(Witcher{
	Name: "Geralt of Rivia",
}).Exec().(*Witcher)

updatedWitcher := WitcherModel.UpdateByID(witcher.ID, Witcher{
	Name: "White Wolf",
}).Exec().(*Witcher)

fmt.Println(updatedWitcher.Name) // The updated name of the document as White Wolf
```

### Delete a Document

```go
witcher := WitcherModel.Find(Witcher{
	Name: "White Wolf",
}).Exec().(*Witcher)

WitcherModel.DeleteByID(witcher.ID).Exec()
```

**Note:** The above examples are just a few of the many operations you can perform with a model. For a complete list of operations, refer to each of their individual sections under **[Basic Queries](/docs/category/basic-queries) and [Querybuilder](/docs/category/querybuilder)**.