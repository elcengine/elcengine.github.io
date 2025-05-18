---
sidebar_position: 10
---

# Is Undefined

The `IsUndefined` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is undefined.

## Usage

```go
witchers := WitcherModel.Where("signs").IsUndefined().ExecTT()
```

In the example above, we are filtering the results to only include witchers whose signs field is undefined.
