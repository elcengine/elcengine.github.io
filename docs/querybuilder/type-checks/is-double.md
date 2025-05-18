---
sidebar_position: 7
---

# Is Double

The `IsDouble` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is double.

## Usage

```go
witchers := WitcherModel.Where("age").IsDouble().ExecTT()
```

In the example above, we are filtering the results to only include witchers whose age field is a double
