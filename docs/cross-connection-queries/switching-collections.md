---
sidebar_position: 4
---

# Switching Collections

The Elemental ORM allows you to switch between different collections in the middle of a query. This is useful when you have multiple collections and you need to query data from both.

```go
witchers := WitcherModel.Find().SetCollection("secondary-collection").Exec().([]Witcher)
```

In the example above, we are switching the collection to `secondary-collection` before executing the query. This will ensure that the query is executed on the `secondary-collection` collection.