---
sidebar_position: 3
---

# Document Replace

The `Model.OnReplace` method allows you to listen to when a document corresponding to the model is replaced in the database.

## Usage

```go
CastleModel.onReplace(func(castle Castle) {
	fmt.Println("Castle replaced", castle)
})
```