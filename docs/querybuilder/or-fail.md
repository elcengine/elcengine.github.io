---
sidebar_position: 27
---

# Or Fail

The `OrFail` method is chained at the end of a query to panic with an error if the query returns no results.

## Usage

```go
witchers := WitcherModel.Find().OrFail().ExecTT()
```

In the example above, we are querying the Witcher collection and panicking with a default error if no documents are found.

## Usage with a custom error

```go
witchers := WitcherModel.Find().OrFail(errors.New("No witchers found")).ExecTT()
```

In the example above, we are querying the Witcher collection and panicking with a custom error if no documents are found.
