---
sidebar_position: 4
---

# Find

The `find` query is used to retrieve a list of records from a collection. It is the most common query used in the database.

## Usage

With elemental you are no longer forced to pass in `nil` to the `Find` method like in the driver if you want to retrieve all records. You can simply call the `Find` method without any arguments.

```go
witchers := WitcherModel.Find().Exec().([]Witcher)
```

## Usage with Filters

You can filter the results of a `find` query by passing a filter object to the `Find` method.

```go
witchers := WitcherModel.Find(primitive.M{
    "school": "Wolf"
}).Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers from the Wolf school.
