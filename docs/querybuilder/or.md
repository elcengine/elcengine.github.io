---
sidebar_position: 17
---

# Or

The `Or` method is used to extend the query with an OR condition.

## Usage

```go
witchers := WitcherModel.Where("name").Equals("Geralt").Or().Where("age").Equals(100).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose name is Geralt or age is 100.
