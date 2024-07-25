---
sidebar_position: 2
---

# CreateMany

The `CreateMany` method is used to insert multiple documents into a collection.

## Usage.

```go
witchers := WitcherModel.CreateMany([]Witcher{
	{
		Name:       "Geralt of Rivia",
		Age:        100,
		Occupation: "Witcher",
		Weapons:    []string{"Silver Sword", "Steel Sword"},
		Retired:    false,
		School:     nil
	},
	{
		Name:       "Yennefer of Vengerberg",
		Age:        100,
		Occupation: "Sorceress",
		Weapons:    nil,
		Retired:    false,
		School:     nil
	},
}).Exec().(Witcher)

for _, witcher := range witchers {
	fmt.Println(witcher.ID) // The ObjectID of the newly created document
	fmt.Println(witcher.CreatedAt) // The timestamp when the document was created
	fmt.Println(witcher.UpdatedAt) // The timestamp when the document was last updated
}
```

# InsertMany

The `InsertMany` method is an alias for the `CreateMany` method and can be used interchangeably.