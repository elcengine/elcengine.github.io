---
sidebar_position: 17
---

# Find One And Delete

The `FindOneAndDelete` method is used to find a single document and delete it from a collection.

## Usage

```go
witcher := WitcherModel.FindOneAndDelete(primitive.M{"name": "Vesemir"}).ExecPtr()
```

The example above finds a single witcher with the name "Vesemir" and deletes it from the database. The method returns the document as it was before the deletion.
