---
sidebar_position: 16
---

# Rename

The `Rename` method is used to rename a field in all documents in a collection.

## Usage

```go
witcher := WitcherModel.Rename("name", "full_name").Exec()
```

The example above renames the field `name` to `full_name` in all documents in the Witcher collection.
