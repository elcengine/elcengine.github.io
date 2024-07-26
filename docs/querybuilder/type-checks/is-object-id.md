---
sidebar_position: 11
---

# Is Object ID

The `IsObjectID` method is chained to the `Where` method and is used to filter the results of a query to only include documents where the specified field is an object ID.

## Usage

```go
witchers := WitcherModel.Where("_id").IsObjectID().Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers whose _id field is an object ID.