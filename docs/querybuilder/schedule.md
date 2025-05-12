---
sidebar_position: 25
---

# Schedule

The `Schedule` method is used to schedule the execution of a query based on a given specifier. This is built on top of [`Robofig Cron`](https://pkg.go.dev/github.com/robfig/cron/v3) module and supports all the cron specifiers that `Robofig` supports.

## Usage

```go
id := WitcherModel.UpdateOne(primitive.M{"name": "Geralt"}, primitive.M{"age": 101}).Schedule("0 0 1 1 *").Exec().(int)
```

In the example above, we are updating the `age` field of the Witcher document with the name `Geralt` and scheduling the update to run on the first day of January at midnight.

## Cancelling a scheduled query

To cancel a scheduled query, you can use the `Cancel` method.

```go
WitcherModel.UnSchedule(id)
```

In the example above, we are cancelling the scheduled query with the given `id` which was returned when the query was scheduled.

## Cancell all scheduled queries

To cancel all scheduled queries, you can use the `UnScheduleAll` method.

```go
WitcherModel.UnScheduleAll()
```

In the example above, we are cancelling all scheduled queries.
