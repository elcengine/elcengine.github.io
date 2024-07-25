---
sidebar_position: 9
---

# UpdateByID

The `UpdateByID` method is used to update a single document in the database that matches the given ID.

## Usage.

```go
result := WitcherModel.UpdateByID(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d"), primitive.M{"age": 200}).Exec().(*mongo.UpdateResult)
```

The example above finds a single witcher with the given ID and updates their age to 200 and returns the underlying `*mongo.UpdateResult` object.


## Usage with Options

You can pass options to the `UpdateByID` method to specify how the update operation should be performed.

```go
opts := options.UpdateOptions{}
opts.SetBypassDocumentValidation(true)
result := WitcherModel.UpdateByID(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d"), primitive.M{"age": 200}, &opts).Exec().(*mongo.UpdateResult)
```

In the example above, we are passing options to the `UpdateByID` method to bypass document validation during the update operation.