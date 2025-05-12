---
sidebar_position: 4
---

# Divide

The `Div` method can be chained to a query to divide the value of a field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Div("age", 2).Exec().(*mongo.UpdateResult)
```

In the example above, we are dividing the age of the witcher named Vesemir by 2.
