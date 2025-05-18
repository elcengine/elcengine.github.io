---
sidebar_position: 10
---

# Regex

The `Regex` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field matches the specified regular expression.

## Usage

```go
witchers := WitcherModel.Where("name").Regex("^G").ExecTT()
```

In the example above, we are filtering the results to only include witchers whose name starts with the letter "G".
