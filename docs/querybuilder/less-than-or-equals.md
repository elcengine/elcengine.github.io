---
sidebar_position: 6
---

# Less Than or Equals

The `LessThanOrEquals` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is less than or equal to the specified value.

## Usage

```go
witchers := WitcherModel.Where("age").LessThanOrEquals(100).ExecTT()
```

In the example above, we are filtering the results to only include witchers who are less than or equal to 100 years old.
