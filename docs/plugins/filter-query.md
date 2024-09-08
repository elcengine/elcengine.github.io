---
sidebar_position: 1
---

# Filter Query

Middleware which allows you to transform a specially crafted RESTful query into a MongoDB query. This middleware is extremely useful when building RESTful APIs with Elemental.

## Usage with Go Fiber

```go
import (
    "github.com/gofiber/fiber/v2"
    "github.com/elcengine/elemental/plugins/filter-query"
)

func main() {
    app := fiber.New()

    app.Use(func (ctx *fiber.Ctx) error {
        ctx.Locals("filterQuery", filter_query.Parse(string(ctx.Request().URI().QueryString())))
        return ctx.Next()
    })

    app.Get("/api/v1/witchers", func(ctx *fiber.Ctx) error {
        witchers := WitcherModel.Find((ctx.Locals("filterQuery")).(filter_query.FilterQueryResult).Filters).Exec() // It is assumed that WitcherModel is an Elemental model, though this works even if used with the standard MongoDB driver
        return ctx.JSON(witchers)
    })

    app.Listen(":3000")
}
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
        "name": "Geralt"
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
