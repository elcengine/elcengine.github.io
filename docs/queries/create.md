---
sidebar_position: 1
---

# Create

The `Create` method is used to insert a single document into a collection.

## Usage.

```go
witcher := WitcherModel.Create(Witcher{
	Name:       "Geralt of Rivia",
	Age:        100,
	Occupation: "Witcher",
	Weapons:    []string{"Silver Sword", "Steel Sword"},
	Retired:    false,
	School:     nil
}).Exec().(Witcher)

fmt.Println(witcher.ID) // The ObjectID of the newly created document
fmt.Println(witcher.CreatedAt) // The timestamp when the document was created
fmt.Println(witcher.UpdatedAt) // The timestamp when the document was last updated
```
