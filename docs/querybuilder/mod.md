---
sidebar_position: 9
---

# Mod

The `Mod` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is divisible by the specified divisor and has the specified remainder.

## Usage

```go
witchers := WitcherModel.Where("age").Mod(5, 2).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose age is divisible by 5 and has a remainder of 2.
