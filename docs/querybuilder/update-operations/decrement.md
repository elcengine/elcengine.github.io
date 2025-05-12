---
sidebar_position: 2
---

# Decrement

The `Dec` method can be chained to a query to decrement the value of a field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Dec("age", 1).Exec().(*mongo.UpdateResult)
```

In the example above, we are decrementing the age of the witcher named Vesemir by 1.
