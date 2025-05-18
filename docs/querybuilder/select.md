---
sidebar_position: 21
---

# Select

The `Select` method is used to specify which fields to include in the results.

## Usage

```go
witchers := WitcherModel.Find().Select("name", "age").ExecTT()
```

In the example above, we are selecting only the `name` and `age` fields from the `Witcher` documents.

## Usage with a string input

```go
witchers := WitcherModel.Find().Select("name age").ExecTT()
```

## Usage with a map input

```go
witchers := WitcherModel.Find().Select(primitive.M{
    "name": 1,
    "age":  1,
}).ExecTT()
```

## Usage with a slice input

```go
witchers := WitcherModel.Find().Select([]string{"name", "age"}).ExecTT()
```
