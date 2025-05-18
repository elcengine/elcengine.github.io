---
sidebar_position: 1
---

# Enable Auditing

Auditing can be enabled on a model by calling upon its `EnableAuditing` method. This will have the model log all changes made to its documents.

This is extremely useful for debugging and tracking who made what changes to the database.

It internally makes use of the `Triggers` defined within Elemental. This means that you can also audit changes performed right on the database from other applications.

## Usage

```go
CastleModel.EnableAuditing()
```

#### Alternatively you can pass `Audting` as `true` within the schema options when creating a new model.

## TODO

- [ ] Implement concurrency control to make sure that the same audit log is not written multiple times.
