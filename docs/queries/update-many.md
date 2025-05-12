---
sidebar_position: 10
---

# Update Many

The `UpdateMany` method is used to update multiple documents in a collection based on a filter.

## Usage.

```go
result := WitcherModel.UpdateMany(primitive.M{"school": "Wolf"}, primitive.M{"retired": true}).Exec().(*mongo.UpdateResult)
```

The example above finds all witchers from the Wolf school and updates their `retired` field to `true`. The method returns the underlying `*mongo.UpdateResult` object.

## Usage with Options

You can pass options to the `UpdateMany` method to specify how the update operation should be performed.

```go
opts := options.UpdateOptions{}
opts.SetBypassDocumentValidation(true)
result := WitcherModel.UpdateMany(primitive.M{"school": "Wolf"}, primitive.M{"retired": true}, &opts).Exec().(*mongo.UpdateResult)
```

In the example above, we are passing options to the `UpdateMany` method to bypass document validation during the update operation.
