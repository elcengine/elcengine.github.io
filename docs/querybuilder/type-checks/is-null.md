---
sidebar_position: 3
---

# Is Null

The `IsNull` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is null.

## Usage

```go
witchers := WitcherModel.Where("school").IsNull().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose school is null.