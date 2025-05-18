---
sidebar_position: 6
---

# Collection Rename

The `Model.OnCollectionRename` method allows you to listen to when the collection corresponding to the model is renamed in the database.

## Usage

```go
CastleModel.OnCollectionRename(func() {
	fmt.Println("Castle collection renamed")
})
```
