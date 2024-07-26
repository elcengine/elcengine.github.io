---
sidebar_position: 20
---

# Select

The `Select` method is used to specify which fields to include in the results.

## Usage

```go
witchers := WitcherModel.Find().Select("name", "age").Exec().([]Witcher)
```

In the example above, we are selecting only the `name` and `age` fields from the `Witcher` documents.

## Usage with a string input

```go
witchers := WitcherModel.Find().Select("name age").Exec().([]Witcher)
```

## Usage with a map input

```go
witchers := WitcherModel.Find().Select(primitive.M{
    "name": 1,
    "age":  1,
}).Exec().([]Witcher)
```

## Usage with a slice input

```go
witchers := WitcherModel.Find().Select([]string{"name", "age"}).Exec().([]Witcher)
```