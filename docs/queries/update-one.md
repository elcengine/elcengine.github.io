---
sidebar_position: 8
---

# Update One

The `UpdateOne` method is used to update a single document in the database that matches the given filter.

## Usage

```go
result := WitcherModel.UpdateOne(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}).Exec().(*mongo.UpdateResult)
```

The example above finds a single witcher with the name "Vesemir" and updates their age to 200 and returns the underlying `*mongo.UpdateResult` object.

## Usage with Options

You can pass options to the `UpdateOne` method to specify how the update operation should be performed.

```go
opts := options.UpdateOptions{}
opts.SetBypassDocumentValidation(true)
result := WitcherModel.UpdateOne(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}, &opts).Exec().(*mongo.UpdateResult)
```

In the example above, we are passing options to the `UpdateOne` method to bypass document validation during the update operation.
