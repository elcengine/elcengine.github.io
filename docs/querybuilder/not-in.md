---
sidebar_position: 13
---

# Not In

The `NotIn` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is not equal to any of the specified values.

## Usage

```go
witchers := WitcherModel.Where("age").NotIn(50, 51, 52).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose age is not 50, 51, or 52.
