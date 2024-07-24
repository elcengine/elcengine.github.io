---
sidebar_position: 1
---

# Skip

The `skip` method allows you to skip a specified number of documents in a collection.

## Usage

```go
witchers := WitcherModel.Find().Skip(10).Exec().([]Witcher)
```

In the example above, we are skipping the first 10 documents in the collection.