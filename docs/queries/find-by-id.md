---
sidebar_position: 6
---

# Find By ID

The `FindByID` method is used to find a single document by its id. It accepts either a string or an `ObjectID` as the id.

## Usage

```go
witcher := WitcherModel.FindByID(primitive.ObjectIDFromHex("5f9f1b2b6f6b1b6d7f9b1b6d")).ExecPtr()
```
-- or --

```go
witcher := WitcherModel.FindByID("5f9f1b2b6f6b1b6d7f9b1b6d").ExecPtr()
```

The example above finds a single witcher with the given id and deletes it from the database.
