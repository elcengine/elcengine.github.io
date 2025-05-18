---
sidebar_position: 21
---

# Delete One

The `DeleteOne` method is used to delete a single document from a collection.

## Usage

```go
result := WitcherModel.DeleteOne(primitive.M{"name": "Vesemir"}).Exec().(*mongo.DeleteResult)
```

The example above deletes a single witcher with the name "Vesemir" and returns the underlying `*mongo.DeleteResult` object.
