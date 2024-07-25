---
sidebar_position: 4
---

# Less Than

The `LessThan` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is less than the specified value.

## Usage

```go
witchers := WitcherModel.Where("age").LessThan(100).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who are less than 100 years old.