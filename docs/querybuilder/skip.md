---
sidebar_position: 22
---

# Skip

The `Skip` method allows you to skip a specified number of documents in a collection.

## Usage

```go
witchers := WitcherModel.Find().Skip(10).Exec().([]Witcher)
```

In the example above, we are skipping the first 10 documents in the collection.
