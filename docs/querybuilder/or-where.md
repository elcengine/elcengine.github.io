---
sidebar_position: 18
---

# Or Where

The `OrWhere` method is a shorter way of chaining the `Where` method to the `Or` method. It is used to extend the query with an OR condition.

## Usage

```go
witchers := WitcherModel.Where("name").Equals("Geralt").OrWhere("age").Equals(100).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose name is Geralt or age is 100.
