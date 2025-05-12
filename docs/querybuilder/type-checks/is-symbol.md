---
sidebar_position: 15
---

# Is Symbol

The `IsSymbol` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is a symbol.

## Usage

```go
witchers := WitcherModel.Where("enemies").IsSymbol().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose enemies field is a symbol.
