---
sidebar_position: 14
---

# Has

The `Has` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified array field has an element equal to the specified value.

## Usage

```go
witchers := WitcherModel.Where("weapons").Has("Steel Sword").Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who have a Steel Sword in their weapons array.