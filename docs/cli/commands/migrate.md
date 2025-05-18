---
sidebar_position: 2
---

# Migrate

Create, apply and rollback migrations using the Elemental CLI.

## Create a migration

The migration file will be created in the `migrations_dir` specified in the configuration file. By default, this is `database/migrations`.

```bash
elemental migrate create <migration_name>
```

## Run migrations

Run all pending migrations. This will create a changelog collection in the database if it does not exist. By default, this is `changelog`.

```bash
elemental migrate up
```

## Rollback migrations

Rollback the last migration. This will remove the last entry in the changelog collection.

```bash
elemental migrate down
```