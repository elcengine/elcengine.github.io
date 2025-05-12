---
sidebar_position: 11
---

# Pull

The `Pull` method can be chained to a query to remove the specified element from an array field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Pull("weapons", "Steel Sword").Exec().(*mongo.UpdateResult)
```

In the example above, we are removing the value "Steel Sword" from the `weapons` array of the witcher named Vesemir. If the value is not present in the array, no changes will be made.
