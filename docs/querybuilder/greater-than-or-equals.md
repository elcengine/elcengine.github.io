---
sidebar_position: 7
---

# Greater Than or Equals

The `GreaterThanOrEquals` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is greater than or equal to the specified value.

## Usage

```go
witchers := WitcherModel.Where("age").GreaterThanOrEquals(100).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who are greater than or equal to 100 years old.