---
sidebar_position: 3
---

# Save

The `Save` method is used to update a given document in the database. If the document does not exist, it will be inserted into the collection.

## Usage

```go
witcher := WitcherModel.Save(Witcher{
    Name: "Vesemir",
    Age: 200,
}).Exec().(*mongo.UpdateResult)
```

The example above updates the witcher with the name "Vesemir" and sets their age to 200. If the document does not exist, it will be inserted into the collection.
