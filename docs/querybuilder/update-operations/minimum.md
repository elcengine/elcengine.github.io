---
sidebar_position: 5
---

# Minimum

The `Min` method can be chained to a query to update the value of a field if the new value is less than the current value.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Min("age", 50).Exec().(*mongo.UpdateResult)
```

In the example above, we are updating the age of the witcher named Vesemir to 50 if the current age is greater than 50.