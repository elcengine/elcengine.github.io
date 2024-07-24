---
sidebar_position: 2
---

# Limit

The `limit` method allows you to limit the number of documents returned in a collection.

## Usage

```go
witchers := WitcherModel.Find().Limit(5).Exec().([]Witcher)
```

In the example above, we are limiting the number of documents returned to 5.