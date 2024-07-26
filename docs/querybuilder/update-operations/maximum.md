---
sidebar_position: 6
---

# Maximum

The `Max` method can be chained to a query to update the value of a field if the new value is greater than the current value.

## Usage

```go
result := WitcherModel.Where("name", "Vesemir").Max("age", 201).Exec().(*mongo.UpdateResult)
```

In the example above, we are updating the age of the witcher named Vesemir to 201 if the current age is less than 201.