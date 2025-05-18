---
sidebar_position: 25
---

# Schedule

The `Schedule` method is used to schedule the execution of a query based on a given specifier. This is built on top of [`Robofig Cron`](https://pkg.go.dev/github.com/robfig/cron/v3) module and supports all the cron specifiers that `Robofig` supports.

## Usage

```go
id := WitcherModel.UpdateOne(primitive.M{"name": "Geralt"}, primitive.M{"age": 101}).Schedule("0 0 1 1 *").Exec().(int)
```

In the example above, we are updating the `age` field of the Witcher document with the name `Geralt` and scheduling the update to run on the first day of January at midnight. This example is obviously not a real-world example, but it demonstrates how to use the `Schedule` method.

## Cancelling a scheduled query

To cancel a scheduled query, you can use the `Cancel` method.

```go
WitcherModel.Unschedule(id)
```

In the example above, we are cancelling the scheduled query with the given `id` which was returned when the query was scheduled.

## Cancell all scheduled queries

To cancel all scheduled queries, you can use the `UnscheduleAll` method.

```go
WitcherModel.UnscheduleAll()
```

In the example above, we are cancelling all scheduled queries.

## Handling errors

The `Schedule` method accepts a secondary argument which is a function which will be called with the error if if the schedule execution fails or panics. This is useful for logging and knowing when a scheduled query fails.

```go
WitcherModel.UpdateOne(primitive.M{"name": "Geralt"}, primitive.M{"age": 101}).Schedule("0 0 1 1 *", func(err any) {
    log.Println("Scheduled query failed:", err)
}).Exec()
```