---
sidebar_position: 8
---

# Add To Set

The `AddToSet` method can be chained to a query to add a value to an array field in the documents that match the query but only if the value is not already in the array.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").AddToSet("weapons", "Crossbow", "Axe", "Dagger").Exec().(*mongo.UpdateResult)
```

In the example above, we are adding the values "Crossbow", "Axe", and "Dagger" to the `weapons` array of the witcher named Vesemir. If any of these values are already present in the array, they will not be added again.