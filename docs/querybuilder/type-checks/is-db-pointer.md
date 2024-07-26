---
sidebar_position: 14
---

# Is DB Pointer

The `IsDBPointer` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is a db pointer.

## Usage

```go
witchers := WitcherModel.Where("enemies").IsDBPointer().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose enemies field is a db pointer.