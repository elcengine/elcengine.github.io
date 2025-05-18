---
sidebar_position: 1
---

# Filter Query

Functions which allow you to transform a specially crafted RESTful query into a MongoDB query. This middleware is extremely useful when building RESTful APIs with Elemental.

## Raw Usage

```go
import (
    "fmt"
    "github.com/elcengine/elemental/plugins/filterquery"
)

func main() {
  q := fq.Parse("?filter[name]=eq(Geralt)&filter[age]=gt(100)&sort=-name&select=name,age")
  fmt.Println(q.Filters) // map[string]interface{}{"name": map[string]interface{}{"$eq": "Geralt"}, "age": map[string]interface{}{"$gt": 100}}
}
```

## Usage with Go Fiber

```go
import (
    "github.com/gofiber/fiber/v2"
    "github.com/elcengine/elemental/plugins/filterquery/middleware"
)

func main() {
    app := fiber.New()

    app.Use(fqm.NewGoFiber())

    app.Get("/api/v1/witchers", func(ctx *fiber.Ctx) error {
        q := ctx.Locals(fqm.CtxKey).(fq.FilterQueryResult)
        witchers := WitcherModel.Find(q.Filters).Sort(q.Sorts).Select(q.Select).ExecTT()
        return ctx.JSON(witchers)
    })

    app.Listen(":3000")
}
```

## Usage Shortcuts

- **QS**

  - Construct an Elemental query directly from a request's query string.
  It uses the filterquery plugin to parse the query string and apply filters, sorting, lookups, and projections to the final query.
  
  <br/>

  ```go
  witchers := WitcherModel.QS("filter[name]=Geralt").ExecTT()
  ```

- **QSR**
  - Construct an Elemental query directly from a FilterQueryResult.

    <br/>

  ```go
  witchers := WitcherModel.QSR(fq.Parse("filter[name]=Geralt")).ExecTT()
  ```


## Example RESTful Queries and their MongoDB Equivalents

### Simple Queries

- **Query**: `/api/v1/witchers?filter[name]=Geralt`

  **MongoDB Query**:

  ```json
  {
    "name": "Geralt"
  }
  ```

- **Query**: `/api/v1/witchers?filter[name]=eq(Geralt)`

  **MongoDB Query**:

  ```json
  {
    "name": {
      "$eq": "Geralt"
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[age]=gt(100)`

  **MongoDB Query**:

  ```json
  {
    "age": {
      "$gt": 100
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[age]=gte(100)`

  **MongoDB Query**:

  ```json
  {
    "age": {
      "$gte": 100
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[age]=lt(100)`

  **MongoDB Query**:

  ```json
  {
    "age": {
      "$lt": 100
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[age]=lte(100)`

  **MongoDB Query**:

  ```json
  {
    "age": {
      "$lte": 100
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[retired]=true`

  **MongoDB Query**:

  ```json
  {
    "retired": true
  }
  ```

- **Query**: `/api/v1/witchers?filter[retired]=false`

  **MongoDB Query**:

  ```json
  {
    "retired": false
  }
  ```

- **Query**: `/api/v1/witchers?filter[weapons]=in(Silver Sword,Steel Sword)`

  **MongoDB Query**:

  ```json
  {
    "weapons": {
      "$in": ["Silver Sword", "Steel Sword"]
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[weapons]=nin(Silver Sword,Steel Sword)`

  **MongoDB Query**:

  ```json
  {
    "weapons": {
      "$nin": ["Silver Sword", "Steel Sword"]
    }
  }
  ```

- **Query**: `/api/v1/witchers?filter[name]=reg(Geralt)`

  **MongoDB Query**:

  ```js
  {
      "name": {
          "$regex": /Geralt/
      }
  }
  ```

- **Query**: `/api/v1/witchers?filter[school]=exists(true)`

  **MongoDB Query**:

  ```json
  {
    "school": {
      "$exists": true
    }
  }
  ```
