---
sidebar_position: 2
---

# The Audit Model

The Audit model is a special model that is used to log changes to other models. It is used to track changes to documents in the database.

```go
var AuditModel = NewModel[Audit]("Audit", NewSchema(map[string]Field{
	"Entity": {
		Type:     elemental.String,
		Required: true,
	},
	"Type": {
		Type: elemental.String,
	},
	"Document": {
		Type:     elemental.Map,
		Required: true,
	},
	"User": {
		Type: elemental.String,
	},
}, SchemaOptions{
	Collection: "audits",
}))
```

The above fields can be described as follows:

- **Entity**: The name of the model that was changed.

- **Type**: The type of change that was made. This can be one of the following values: `insert`, `update`, or `delete`.

- **Document**: The document that was changed. This is a map of field names to their values.

- **User**: The user who made the change. This is read from the context key `user` and you are responsible for setting it. The context can be passed into the `EnableAuditing` method when auditing is enabled.
