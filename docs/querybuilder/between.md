---
sidebar_position: 8
---

# Between

The `Between` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is within a specified range.

## Usage

```go
witchers := WitcherModel.Where("age").Between(50, 100).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who are between 50 and 100 years old.