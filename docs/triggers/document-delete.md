---
sidebar_position: 4
---

# Document Delete

The `Model.OnDelete` method allows you to listen to when a document corresponding to the model is deleted in the database.

## Usage

```go
CastleModel.OnDelete(func(castleId primitive.ObjectID) {
	fmt.Println("Castle deleted", castleId)
})
```