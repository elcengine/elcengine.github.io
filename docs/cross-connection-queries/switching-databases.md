---
sidebar_position: 2
---

# Switching Databases

The Elemental ORM allows you to switch between different databases in the middle of a query. This is useful when you have multiple databases and you need to query data from both.

```go
witchers := WitcherModel.Find().SetDatabase("secondary-database").Exec().([]Witcher)
```

In the example above, we are switching the database to `secondary-database` before executing the query. This will ensure that the query is executed on the `secondary-database` database.

## Switching Databases and Collections

You can also switch both the collection and the database in the middle of a query.

```go
witchers := WitcherModel.Find().SetDatabase("secondary-database").SetCollection("secondary-collection").Exec().([]Witcher)
```

In the example above, we are switching the database to `secondary-database` and the collection to `secondary-collection` before executing the query. This will ensure that the query is executed on the `secondary-database` database and the `secondary-collection` collection.
