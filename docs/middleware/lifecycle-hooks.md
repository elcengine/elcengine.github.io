---
sidebar_position: 1
---

# Lifecycle Hooks

Elemental provides a way to inject custom logic into the lifecycle of a model. This is done by defining middleware functions that are executed at specific points in its lifecycle.

## Middleware Functions

Middleware functions are model methods which you can invoke to register custom callbacks/handlers to be executed before or after certain operations. They are executed in the order they are defined.

You can define any number of middleware functions on a single model. Each middleware function is passed in necessary arguments as pointers related to the current operation such as the document being operated on or the filters being used. **Since these arguments are pointers, you can modify them within the middleware function in any way you want.**

Each middleware function returns a boolean value indicating whether the operation should continue or not. If the middleware function returns `false`, the operation will be aborted and no further middleware functions will be executed.

There are 2 categories of middleware functions in Elemental:

1. **Pre Middleware Functions**: These functions are executed before an operation is performed on a model.
2. **Post Middleware Functions**: These functions are executed after an operation is performed on a model.

## Example Usage

```go
WitcherModel.PreSave(func(witcher *bson.M) bool {
	fmt.Println("PreSave middleware executed", *witcher)
	return true
})
```

In the example above, we define a `PreSave` middleware function on the `WitcherModel`. This middleware function will be executed before a document is saved to the database.

## Available Middleware Functions

### Pre Middleware Functions

- **PreSave**: Executed before a document is saved to the database.
- **PreUpdateOne**: Executed before a single document is updated in the database.
- **PreDeleteOne**: Executed before a single document is deleted from the database.
- **PreDeleteMany**: Executed before multiple documents are deleted from the database.
- **PreFindOneAndUpdate**: Executed before a single document is updated in the database.
- **PreFindOneAndDelete**: Executed before a single document is deleted from the database.
- **PreFindOneAndReplace**: Executed before a single document is replaced in the database.

### Post Middleware Functions

- **PostSave**: Executed after a document is saved to the database.
- **PostUpdateOne**: Executed after a single document is updated in the database.
- **PostDeleteOne**: Executed after a single document is deleted from the database.
- **PostDeleteMany**: Executed after multiple documents are deleted from the database.
- **PostFind**: Executed after documents are found in the database.
- **PostFindOneAndUpdate**: Executed after a single document is updated in the database.
- **PostFindOneAndDelete**: Executed after a single document is deleted from the database.
- **PostFindOneAndReplace**: Executed after a single document is replaced in the database.
