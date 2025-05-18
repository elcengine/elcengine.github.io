---
sidebar_position: 19
---

# Delete

The `Delete` method is used to delete a given document in the database.

## Usage

```go
witcherToDelete := WitcherModel.FindOne(Witcher{
    Name: "Vesemir",
    Age: 200,
}).ExecPtr()
deletedWitcher := WitcherModel.Delete(*witcherToDelete).ExecT()
```

The example above deletes the witcher with the name "Vesemir" and age 200.
