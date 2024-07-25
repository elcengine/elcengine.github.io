---
sidebar_position: 14
---

# Find One And Replace

The `FindOneAndReplace` method is used to find a single document in the database by the given filter and replace it.

## Usage.

```go
witcher := WitcherModel.FindOneAndReplace(primitive.m{"name": "Geralt"}, Witcher{
    Name: "Eskel",
    Age: 100,
}).Exec().(*Witcher)
```

The example above finds the witcher with the name "Geralt" and replaces it with a new document with the name "Eskel" and age 100.


## Usage with Options

You can pass options to the `FindOneAndReplace` method to specify how the replace operation should be performed.

```go
opts := options.FindOneAndReplaceOptions{}
opts.SetByPassDocumentValidation(true)
witcher := WitcherModel.FindOneAndReplace(primitive.m{"name": "Geralt"}, Witcher{
    Name: "Eskel",
    Age: 100,
}, &opts).Exec().(*Witcher)
```

In the example above, we are passing options to the `FindOneAndReplace` method to bypass document validation during the replace operation.