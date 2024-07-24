---
sidebar_position: 2
---

# Syncing Indexes

Indexes can by manually synced with the database using the `SyncIndexes` method in a model. This method will create any indexes that are defined in the schema but do not exist in the database as well as remove any indexes that exist in the database but are not defined in the schema.

```go
AlghoulModel.SyncIndexes()
```