---
sidebar_position: 22
---

# Delete Many

The `DeleteMany` method is used to delete multiple documents from a collection.

## Usage.

```go
result := WitcherModel.DeleteMany(primitive.M{"school": "Wolf"}).Exec().(*mongo.DeleteResult)
```

The example above deletes all witchers from the Wolf school and returns the underlying `*mongo.DeleteResult` object.