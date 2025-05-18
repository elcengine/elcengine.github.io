---
sidebar_position: 23
---

# Limit

The `Limit` method allows you to limit the number of documents returned in a collection.

## Usage

```go
witchers := WitcherModel.Find().Limit(5).ExecTT()
```

In the example above, we are limiting the number of documents returned to 5.
