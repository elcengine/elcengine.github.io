---
sidebar_position: 6
---

# Find One And Update

The `FindOneAndUpdate` method is used to find a single document in the database and update it.

## Usage

```go
witcher := WitcherModel.FindOneAndUpdate(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}).ExecPtr()
```

The example above finds a single witcher with the name "Vesemir" and updates their age to 200 and returns the document as it was before the update.

## Usage with Options

You can pass options to the `FindOneAndUpdate` method to specify how the update operation should be performed.

```go
opts := options.FindOneAndUpdateOptions{}
opts.SetReturnDocument(options.After)
witcher := WitcherModel.FindOneAndUpdate(primitive.M{"name": "Vesemir"}, primitive.M{"age": 200}, &opts).ExecPtr()
```

In the example above, we are passing options to the `FindOneAndUpdate` method to return the document after the update operation has been performed.
