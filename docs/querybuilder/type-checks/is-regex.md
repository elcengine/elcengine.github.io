---
sidebar_position: 13
---

# Is Regex

The `IsRegex` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is a regex.

## Usage

```go
witchers := WitcherModel.Where("enemies").IsRegex().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose enemies field is a regex.
