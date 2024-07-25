---
sidebar_position: 1
---

# Where

The `Where` method is used to filter documents in a collection based on a specified condition. It can be chained along with other query methods to further refine the results.

## Usage

```go
witchers := WitcherModel.Where("school").Equals("wolf").Exec().([]Witcher)
```

In the example above, we are filtering the results to only include witchers from the Wolf school.


## Usage with a second argument

```go
witchers := WitcherModel.Where("school", "wolf").Exec().([]Witcher)
```

Passing the second argument to the `Where` method is equivalent to calling the `Equals` method on the first argument. The example above is equivalent to the first example.

## Usage with FindOne

```go
witcher := WitcherModel.FindOne().Where("name").Equals("Geralt").Exec().(*Witcher)
```

In the example above, we are finding the document with the name "Geralt" in the collection.


## Usage with a Delete Operation

```go
WitcherModel.DeleteOne().Where("name").Equals("Geralt").Exec()
```

In the example above, we are deleting the document with the name "Geralt" from the collection.