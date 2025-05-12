---
slug: release-notes
title: Releases
authors: [akalanka, shifan, sheronie, laksara]
---

## 1.3.0 ↑

### Starting from this one, you can find all Elemental releases and their changelogs at [`GitHub`](https://github.com/elcengine/elemental/releases). Therefore, the current page will no longer be maintained.

## 1.2.0

### New Features

- **Simplified Transaction Batch Usage**: You no longer need to invoke `FlexibleClone` on the model query when passing them to the `TransactionBatch` function.

## 1.1.0

### New Features

- **Filter Query Plugin**: Middleware which allows you to transform a specially crafted RESTful query into a MongoDB query. This middleware is extremely useful when building RESTful APIs with Elemental.

- **Struct Validator Plugin**: Middleware which allows you to validate a struct based on the tags defined in the struct. These validations directly operate on the database layer.

## 1.0.0

- **Initial Release**: This is the first release of Elemental. It includes all core features and plugins that are essential for building RESTful APIs with Go which are backed by MongoDB.
