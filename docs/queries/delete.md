---
sidebar_position: 17
---

# Delete

The `Delete` method is used to delete a given document in the database.

## Usage.

```go
witcherToDelete := WitcherModel.FindOne(Witcher{
    Name: "Vesemir",
    Age: 200,
}).Exec().(*Witcher)
deletedWitcher := WitcherModel.Delete(*witcherToDelete).Exec().(Witcher)
```

The example above deletes the witcher with the name "Vesemir" and age 200.