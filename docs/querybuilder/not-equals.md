---
sidebar_position: 3
---

# Not Equals

The `NotEquals` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is not equal to the specified value.

## Usage

```go
witchers := WitcherModel.Where("school").NotEquals("wolf").ExecTT()
```

In the example above, we are filtering the results to only include witchers that are not from the Wolf school.
