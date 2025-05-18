---
sidebar_position: 15
---

# Find By ID And Replace

The `FindByIDAndReplace` method is used to find a single document in the database by its ID and replace it.

## Usage

```go
witcher := WitcherModel.FindByIDAndReplace(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d"), Witcher{
    Name: "Eskel",
    Age: 100,
}).ExecPtr()
```

The example above finds the witcher with the given id and replaces it with a new document with the name "Eskel" and age 100.

## Usage with Options

You can pass options to the `FindByIDAndReplace` method to specify how the replace operation should be performed.

```go
opts := options.FindOneAndReplaceOptions{}
opts.SetByPassDocumentValidation(true)
witcher := WitcherModel.FindByIDAndReplace(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d"), Witcher{
    Name: "Eskel",
    Age: 100,
}, &opts).ExecPtr()
```

In the example above, we are passing options to the `FindByIDAndReplace` method to bypass document validation during the replace operation.
