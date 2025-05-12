---
sidebar_position: 12
---

# In

The `In` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is equal to one of the specified values.

## Usage

```go
witchers := WitcherModel.Where("age").In(50, 51, 52).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose age is 50, 51, or 52.13
