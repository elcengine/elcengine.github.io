---
sidebar_position: 1
---

# Document Insert

`Triggers` or `Change Streams` as they are known in MongoDB are a way to listen to changes in the database and react to them. Elemental abstracts this concept and integrates it directly into the model you create.

These are different from lifecycle hooks as they are invoked at the application level and not the database level. This means that your trigger will be invoked regardless of where the change came from, be it your application or another application.

The `Model.onInsert` method allows you to listen to when a new document corresponding to the model is inserted into the database.

## Usage

```go
CastleModel.OnInsert(func(castle Castle) {
	fmt.Println("New castle inserted", castle)
})
`
```
