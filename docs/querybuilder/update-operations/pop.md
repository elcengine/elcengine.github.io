---
sidebar_position: 9
---

# Pop

The `Pop` method can be chained to a query to remove the specified number of elements from the end of an array field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Pop("weapons").Exec().(*mongo.UpdateResult)
```

In the example above, we are removing the last element from the `weapons` array of the witcher named Vesemir. If the array is empty, no changes will be made.

# Usage with a second argument

```go
result := WitcherModel.Where("name", "Vesemir").Pop("weapons", 2).Exec().(*mongo.UpdateResult)
```

In the example above, we are removing the last 2 elements from the `weapons` array of the witcher named Vesemir. If the array has fewer than 2 elements, all elements will be removed. If the array is empty, no changes will be made.