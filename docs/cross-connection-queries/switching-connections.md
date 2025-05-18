---
sidebar_position: 1
---

# Switching Connections

The Elemental ORM allows you to switch between different connections in the middle of a query. This is useful when you have multiple connections to different databases and you need to query data from both.

```go
witchers := WitcherModel.Find().SetConnection("my-connection").ExecTT()
```

In the example above, we are switching the connection to `my-connection` before executing the query. This will ensure that the query is executed on the `my-connection` connection.

## Switching Connections and Databases

You can also switch both the connection and the database in the middle of a query.

```go
witchers := WitcherModel.Find().SetConnection("my-connection").SetDatabase("secondary-database").ExecTT()
```

In the example above, we are switching the connection to `my-connection` and the database to `secondary-database` before executing the query. This will ensure that the query is executed on the `my-connection` connection and the `secondary-database` database.
