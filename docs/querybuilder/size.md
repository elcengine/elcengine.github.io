---
sidebar_position: 16
---

# Size

The `Size` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified array field has a specified number of elements.
## Usage

```go
witchers := WitcherModel.Where("weapons").Size(3).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers who have exactly 3 weapons in their weapons array.