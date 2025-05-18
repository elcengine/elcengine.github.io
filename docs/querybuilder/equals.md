---
sidebar_position: 2
---

# Equals

The `Equals` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is equal to the specified value.

## Usage

```go
witchers := WitcherModel.Where("school").Equals("wolf").ExecTT()
```

In the example above, we are filtering the results to only include witchers from the Wolf school.
