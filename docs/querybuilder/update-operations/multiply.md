---
sidebar_position: 3
---

# Multiply

The `Mul` method can be chained to a query to multiply the value of a field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Mul("age", 2).Exec().(*mongo.UpdateResult)
```

In the example above, we are multiplying the age of the witcher named Vesemir by 2.