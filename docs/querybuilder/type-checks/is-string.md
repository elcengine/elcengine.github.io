---
sidebar_position: 2
---

# Is String

The `IsString` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is a string.

## Usage

```go
witchers := WitcherModel.Where("name").IsString().ExecTT()
```

In the example above, we are filtering the results to only include witchers whose name is a string.
