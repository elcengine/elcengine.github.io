---
sidebar_position: 4
---

# Is Boolean

The `IsBoolean` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is boolean.

## Usage

```go
witchers := WitcherModel.Where("retired").IsBoolean().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose retired field is a boolean.