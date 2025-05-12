---
sidebar_position: 11
---

# Upsert

The `Upsert` method is used to update a single document in a collection based on a filter and insert the document if it does not exist.

## Usage.

```go
result := WitcherModel.UpdateOne(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}).Upsert().Exec().(*mongo.UpdateResult)
```

The example above finds a single witcher with the name "Vesemir" and updates their age to 200. If the document does not exist, it will be inserted into the collection.

## Usage with Options

You can pass the `Upsert` field as `true` in the `UpdateOptions` to specify that the operation should perform an upsert.

```go
opts := options.UpdateOptions{}
opts.SetUpsert(true)
result := WitcherModel.UpdateOne(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}, &opts).Exec().(*mongo.UpdateResult)
```

In the example above, we are passing options to the `FindByIDAndUpdate` method to return the document after the update operation has been performed.
