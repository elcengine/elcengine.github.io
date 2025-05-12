---
sidebar_position: 2
---

# Creating a Connection

All Connections in Elemental are managed by the `elemental` package which can be imported as follows:

```go
import "github.com/elcengine/elemental/core"
```

Connecting to a MongoDB database is a simple as calling the `Connect` function with your connection string:

```go
client := elemental.Connect("mongodb://localhost:27017")
```

## Connecting with Custom Client Options

You can also pass custom client options from the `go.mongodb.org/mongo-driver/mongo/options` package into a `Connect` function to configure your connection:

```go
opts := options.Client().SetTimeout(10 * time.Second)
client := elemental.Connect(elemental.ConnectionOptions{
  URI: "mongodb://localhost:27017",
  ClientOptions: opts,
})
```

This allows you to use the full power of Elemental while still having the flexibility to configure your connection as needed.

## Assign an Alias to your Connection

An alias is a human-readable name that you can assign to your connection. This is useful when you have multiple connections in your application and you want to refer to them or switch between them by name.

A connection without an alias is assigned the default alias **`default`**

```go
client := elemental.Connect(elemental.ConnectionOptions{
  Alias: "my-connection",
  URI: "mongodb://localhost:27017",
})
```

## Retrieve a Connection by Alias

```go
client := elemental.GetConnection("my-connection")
```

## Retrieve the default database in a Connection

- Returns the default database in the default connection

```go
db := elemental.UseDefaultDatabase()
```

- Returns the default database in the connection with the alias "my-connection"

```go
db := elemental.UseDefaultDatabase("my-connection")
```

## Retrieve any database in a Connection

- Returns the database "my-database" in the default connection

```go
db := elemental.UseDatabase("my-database")
```

- Returns the database "my-database" in the connection with the alias "my-connection"

```go
db := elemental.UseDatabase("my-database", "my-connection")
```

## Disconnect from a Connection

```go
elemental.Disconnect()
```

- Or disconnect from multiple connections

```go
elemental.Disconnect("default", "my-connection", "some-other-connection")
```
