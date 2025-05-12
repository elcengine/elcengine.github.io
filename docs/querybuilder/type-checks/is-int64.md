---
sidebar_position: 6
---

# Is Int64

The `IsInt64` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is int64.

## Usage

```go
witchers := WitcherModel.Where("age").IsInt64().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose age field is an int64.
