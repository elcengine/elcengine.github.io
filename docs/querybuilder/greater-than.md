---
sidebar_position: 5
---

# Greater Than

The `GreaterThan` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is greater than the specified value.

## Usage

```go
witchers := WitcherModel.Where("age").GreaterThan(100).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who are more than 100 years old.