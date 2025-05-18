---
sidebar_position: 5
---

# Find One

The `findOne` query is used to retrieve a single record from a collection.

## Usage

```go
witcher := WitcherModel.FindOne().ExecPtr()
```

## Usage with Filters

You can filter the results of a `findOne` query by passing a filter object to the `FindOne` method.

```go
witcher := WitcherModel.FindOne(primitive.M{
    "school": "Wolf"
}).ExecPtr()
```

In the example above, we are finding a single witcher from the Wolf school.
