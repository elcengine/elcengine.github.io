---
sidebar_position: 12
---

# CountDocuments

The `CountDocuments` method is used to count the number of documents in a collection that match a given filter if provided.

## Usage.

```go
count := WitcherModel.CountDocuments().Exec().(int64)
```

## Usage with Filters

You can filter the results of a `CountDocuments` query by passing a filter object to the `CountDocuments` method.

```go
count := WitcherModel.CountDocuments(primitive.M{
    "school": "Wolf"
}).Exec().(int64)
```

In the example above, we are counting the number of witchers from the Wolf school.