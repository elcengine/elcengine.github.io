---
sidebar_position: 5
---

# Is Int32

The `IsInt32` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is int32.

## Usage

```go
witchers := WitcherModel.Where("age").IsInt32().ExecTT()
```

In the example above, we are filtering the results to only include witchers whose age field is an int32.
