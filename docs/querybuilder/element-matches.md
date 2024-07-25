---
sidebar_position: 15
---

# Element Matches

The `ElementMatches` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified array field has an element that matches the specified query.

## Usage

```go
witchers := WitcherModel.Where("weapons").ElementMatches(primitive.M{
    "$eq": "Steel Sword",
}).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who have a Steel Sword in their weapons array.