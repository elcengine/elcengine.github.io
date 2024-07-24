---
sidebar_position: 5
---

# Collection Drop

The `Model.OnCollectionDrop` method allows you to listen to when the collection corresponding to the model is dropped in the database.

## Usage

```go
CastleModel.OnCollectionDrop(func() {
	fmt.Println("Castle collection dropped")
})
```