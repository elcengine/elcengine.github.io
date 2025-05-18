---
sidebar_position: 8
---

# Is Array

The `IsArray` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is an array.

## Usage

```go
witchers := WitcherModel.Where("weapons").IsArray().ExecTT()
```

In the example above, we are filtering the results to only include witchers whose weapons field is an array.
