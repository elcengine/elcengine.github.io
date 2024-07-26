---
sidebar_position: 10
---

# Shift

The `Shift` method can be chained to a query to remove the first element from an array field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Shift("weapons").Exec().(*mongo.UpdateResult)
```

In the example above, we are removing the first element from the `weapons` array of the witcher named Vesemir. If the array is empty, no changes will be made.