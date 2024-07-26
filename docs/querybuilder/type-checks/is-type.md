---
sidebar_position: 1
---

# Is Type

The `IsType` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is the specified type.

## Usage

```go
witchers := WitcherModel.Where("name").IsType(bson.TypeString).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose name is a string.