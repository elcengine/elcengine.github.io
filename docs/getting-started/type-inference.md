---
sidebar_position: 6
---

# Type Inference

Due to the nature and limitations of Go, Elemental cannot provide you with the level of automatic type inference that you might see in a language such as TypeScript.

As you might have noticed, almost all Elemental queries end with the `Exec()` method which returns an `interface{}`. Thefore you need to use a type assertion to convert the result to the expected type in your code.

That being said, manual type assertion is still a pain and we want to make it as easy as possible for you to work with Elemental. To achieve this, Elemental provides a couple of helper methods in place of `Exec()` to get typed results from your queries.

- `ExecT()` - Executes the query and returns the result as the generic type `T` which was passed to the model. This method is useful for queries that return a single document such as `Create()`

- `ExecPtr()` - Executes the query and returns the result as a pointer to the generic type `T` which was passed to the model. This method is useful for queries that return a single document or nothing, such as `FindOne()`.

- `ExecTT()` - Executes the query and returns the result as a slice of the generic type `T` which was passed to the model. This method is useful for queries that return multiple documents such as `Find()`.

- `ExecTP()` - Executes the query and returns the result as a `PaginateResult` of the generic type `T` which was passed to the model. This method is useful for paginated queries.

- `ExecInt()` - Executes the query and returns the result as an `int`. This method is useful for queries that return a single integer value, such as count queries or schedule queries which return a cron entry ID.

- `ExecSS()` - Executes the query and returns the result as a slice of strings. This method is useful for queries that return an array of strings, such as distinct queries.