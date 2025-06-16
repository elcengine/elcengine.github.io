---
sidebar_position: 4
---

# Create a Schema

Schema creation is a part of the `elemental` core package which can be imported as follows:

```go
import "github.com/elcengine/elemental/core"
```

A schema is a blueprint for your data model. It defines the structure of your data and how it should be stored in the database. In Elemental, you can define a schema using the `elemental` package.

```go
unique := true
schema := elemental.NewSchema(map[string]elemental.Field{
	"Name": {
		Type:     elemental.String,
		Required: true,
		Index:    options.Index().SetUnique(true),
	},
	"Age": {
		Type:    elemental.Int,
		Default: DefaultAge,
	},
	"Occupation": {
		Type: elemental.String,
	},
	"School": {
		Type: elemental.String,
	},
	"Weapons": {
		Type:    elemental.Slice,
		Default: []string{},
	},
	"Retired": {
		Type:    elemental.Bool,
		Default: false,
	},
}, elemental.SchemaOptions{
	Collection: "witchers",
})
```

## Schema Fields

Each field in a schema is defined by a `Field` struct. The `Field` struct has the following properties:

- **Type**:  The data type of the field. Can be of reflect.Kind, reflect.Type, an Elemental alias such as elemental.String or a custom reflection

- **Required**: A boolean value that indicates whether the field is required or not.

- **Default**: The default value for the field.

- **Min**: The minimum value for the field.

- **Max**: The maximum value for the field.

- **Length**: The length of the field.

- **Regex**: A regular expression (*regexp.Regexp) that the field must match.

- **Index**: A pointer to an `IndexOptions` struct that defines the indexing options for the field.

- **IndexOrder**: The order in which the field should be indexed.

- **Ref**: A reference to another schema.

- **Collection**: Used in conjuction with the `Ref` field to specify the collection where the referenced data is stored.

- **Schema**: An Elemental Schema that can be used to define nested schemas.

## Schema Options

- **Collection**: The name of the collection in the database where the data should be stored.

- **Database**: The name of the database where the collection is located.

- **Connection**: The alias of the connection to use for interacting with the database.

- **CollectionOptions**: The options to use when creating the collection in the database found under the package `go.mongodb.org/mongo-driver/mongo/options`.
