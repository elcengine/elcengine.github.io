---
sidebar_position: 1
---

# Increment

The `Inc` method can be chained to a query to increment the value of a field in the documents that match the query.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Inc("age", 1).Exec().(*mongo.UpdateResult)
```

In the example above, we are incrementing the age of the witcher named Vesemir by 1.
