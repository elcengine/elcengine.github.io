---
sidebar_position: 13
---

# Push

The `Push` method can be chained to a query to add values to an array field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Push("weapons", "Steel Sword", "Crossbow", "Silver Sword").Exec().(*mongo.UpdateResult)
```

In the example above, we are adding the values "Steel Sword", "Crossbow", and "Silver Sword" to the `weapons` array of the witcher named Vesemir. If the values are already present in the array, they will be added again.
