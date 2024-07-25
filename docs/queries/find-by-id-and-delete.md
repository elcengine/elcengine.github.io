---
sidebar_position: 18
---

# Find By ID And Delete

The `FindByIDAndDelete` method is used to find a single document by its id and delete it from the database.

## Usage.

```go
witcher := WitcherModel.FindByIDAndDelete(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d")).Exec().(*Witcher)
```

The example above finds a single witcher with the given id and deletes it from the database.