---
sidebar_position: 1
---

# Single Data Source

Elemental provides a more user friendly interface for using database transactions compared to the driver by taking care of session management. 

These are standard operations that can be performed on a single data source.

## Transaction

The simplest method to perform a transaction is to call upon `elemental.Transaction` and pass in a function that will be executed within the transaction.

```go
elemental.Transaction(func(ctx mongo.SessionContext) (interface{}, error) {
    // Your transaction code here
})
```

## Client Transaction

If you need to perform a transaction on a specific connection, you can call upon `elemental.ClientTransaction` and pass in the function that will be executed along with the connection alias.

```go
elemental.ClientTransaction("my-connection", func(ctx mongo.SessionContext) (interface{}, error) {
    // Your transaction code here
})
```