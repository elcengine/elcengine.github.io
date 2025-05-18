---
sidebar_position: 9
---

# Is Binary

The `IsBinary` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is binary.

## Usage

```go
witchers := WitcherModel.Where("potions").IsBinary().ExecTT()
```

In the example above, we are filtering the results to only include witchers whose potions field is binary.
