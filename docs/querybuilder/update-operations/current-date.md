---
sidebar_position: 7
---

# Current Date

The `CurrentDate` method can be chained to a query to set the value of a field to the current date and time.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").CurrentDate("last_updated_at").Exec().(*mongo.UpdateResult)
```

In the example above, we are updating the `last_updated_at` field of the witcher named Vesemir to the current date and time.