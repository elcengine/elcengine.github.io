---
sidebar_position: 1
---

# Creating Indexes

Indexes can be defined within a Schema under the `Index` field. This field accepts the original MongoDB index options under the `options.IndexOptions` type.

```go
unique := true
schema := elemental.NewSchema(map[string]elemental.Field{
	"Vitality": {
		Type:     reflect.Int,
		Required: true,
		Index: options.IndexOptions{
			Unique: &unique,
		},
	},
}, elemental.SchemaOptions{
	Collection: "alghouls",
})
```

Elemental will automatically create the index when the schema is created. 

If you need to create an index after the schema has been created, you can always use the traditional way supported by the MongoDB driver.

```go
indexModel := mongo.IndexModel{
    Keys: bson.D{{"Vitality", 1}},
    Options: options.Index().SetUnique(true),
}
e_connection.UseDefault().Collection("alghouls").Indexes().CreateOne(context.Background(), indexModel)
```