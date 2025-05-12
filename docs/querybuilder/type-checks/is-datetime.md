---
sidebar_position: 12
---

# Is Datetime

The `IsDateTime` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is of type datetime.

## Usage

```go
witchers := WitcherModel.Where("created_at").IsDateTime().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose created_at field is of type datetime.
