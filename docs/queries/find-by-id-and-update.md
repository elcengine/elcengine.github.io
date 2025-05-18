---
sidebar_position: 7
---

# Find By ID And Update

The `FindByIDAndUpdate` method is used to find a single document in the database by its ID and update it.

## Usage

```go
witcher := WitcherModel.FindByIDAndUpdate(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d"), primitive.M{"age": 200}).ExecPtr()
```

The example above finds a single witcher with the given id and updates their age to 200 and returns the document as it was before the update.

## Usage with Options

You can pass options to the `FindByIDAndUpdate` method to specify how the update operation should be performed.

```go
opts := options.FindOneAndUpdateOptions{}
opts.SetReturnDocument(options.After)
witcher := WitcherModel.FindByIDAndUpdate(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d"), primitive.M{"age": 200}, &opts).ExecPtr()
```

In the example above, we are passing options to the `FindByIDAndUpdate` method to return the document after the update operation has been performed.
