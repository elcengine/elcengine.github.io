---
sidebar_position: 300
---

# Paginate

Pagination is a common requirement for many applications. Elemental provides a simple way to paginate query results using the `Paginate` method on the query object.

It also returns a bunch of useful information about the pagination, such as the total number of records, the number of records per page, the current page, and the total number of pages.

## Usage

```go
paginatedWitchersResult := WitcherModel.Find().Paginate(1, 2).Exec().(elemental.PaginateResult[Witcher])

for _, witcher := range paginatedWitchersResult.Docs {
    fmt.Println(witcher.Name)
}

fmt.Println("Total records:", paginatedWitchersResult.TotalDocs)
fmt.Println("Records per page:", paginatedWitchersResult.Limit)
fmt.Println("Current page:", paginatedWitchersResult.Page)
fmt.Println("Total pages:", paginatedWitchersResult.TotalPages)
fmt.Println("Has next page:", paginatedWitchersResult.HasNext)
fmt.Println("Has previous page:", paginatedWitchersResult.HasPrev)
fmt.Println("Next page:", paginatedWitchersResult.NextPage)
fmt.Println("Previous page:", paginatedWitchersResult.PrevPage)
```

In the example above, we are paginating the results of the `find` query to return the first page with 2 records per page. We then print out the name of each witcher in the result set and some information about the pagination.
