---
sidebar_position: 7
---

# Stream Invalidate

The `Model.OnStreamInvalidate` method allows you to listen for stream invalidation events.

## Usage

```go
CastleModel.OnStreamInvalidate(func() {
	fmt.Println("Stream invalidated")
})
```
