---
sidebar_position: 11
---

# Exists

The `Exists` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field exists.

## Usage

```go
witchers := WitcherModel.Where("school").Exists().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose school field exists.