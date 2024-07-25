---
sidebar_position: 13
---

# Distinct

The `Distinct` method is used to retrieve a list of distinct values for a specified field in a collection.

## Usage.

```go
schools := WitcherModel.Distinct("school").Exec().([]string)
```

In the example above, we are retrieving a list of distinct schools from the Witcher collection.