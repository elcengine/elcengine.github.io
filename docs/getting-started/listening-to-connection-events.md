---
sidebar_position: 3
---

# Listening to Connection Events

Elemental provides a way to listen to connection pool events such as `ConnectionCreated`, `ConnectionReady`, and `ConnectionClosed`in a much more user-friendly way.

- Listens to the `ConnectionCreated` event of the default connection

```go
e_connection.On("ConnectionCreated", func(alias string) {
  fmt.Println("Connection created for", alias)
})
```

- Listens to the `ConnectionCreated` event of a specific connection

```go
e_connection.On("ConnectionCreated", func(alias string) {
  fmt.Println("Connection created for", alias)
}, "my-connection")
```

## Unsubscribe from Connection Events

- Unsubscribes from the `ConnectionCreated` event of the default connection

```go
e_connection.Off("ConnectionCreated")
```

- Unsubscribes from the `ConnectionCreated` event of a specific connection

```go
e_connection.Off("ConnectionCreated", "my-connection")
```

**For a full list of supported events, refer [this page](https://pkg.go.dev/go.mongodb.org/mongo-driver/event).**

## Override the default Elemental pool monitor

Elemental adds a default pool monitor to the connection pool to listen to connection events. You can override this monitor with your own custom monitor by providing one when creating a connection.

```go
poolMonitor := &event.PoolMonitor{
  Event: func(evt *event.PoolEvent) {
    fmt.Println("Pool event:", evt)
  },
}
client := e_connection.Connect(e_connection.ConnectionOptions{
  URI: "mongodb://localhost:27017",
  PoolMonitor: poolMonitor,
})
```
