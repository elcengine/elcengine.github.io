---
sidebar_position: 20
---

# Delete By ID

The `DeleteByID` method is used to delete a single document from a collection by its ID.

## Usage

```go
result := WitcherModel.DeleteByID(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d")).Exec().(*mongo.DeleteResult)
```

The example above deletes the witcher with the given id and returns the underlying `*mongo.DeleteResult` object.
