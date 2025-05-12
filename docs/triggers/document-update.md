---
sidebar_position: 2
---

# Document Update

The `Model.onUpdate` method allows you to listen to when a document corresponding to the model is updated in the database.

## Usage

```go
CastleModel.OnUpdate(func(castle Castle) {
	fmt.Println("Castle updated", castle)
})
```
