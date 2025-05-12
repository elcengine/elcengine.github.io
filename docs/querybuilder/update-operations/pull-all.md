---
sidebar_position: 12
---

# Pull All

The `PullAll` method can be chained to a query to remove the specified elements from an array field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").PullAll("weapons", "Steel Sword", "Crossbow", "Silver Sword").Exec().(*mongo.UpdateResult)
```

In the example above, we are removing the values "Steel Sword", "Crossbow", and "Silver Sword" from the `weapons` array of the witcher named Vesemir. If the values are not present in the array, no changes will be made.
