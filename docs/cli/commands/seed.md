---
sidebar_position: 3
---

# Seed

Create, apply and rollback seeds using the Elemental CLI.

## Create a seeder

The seeder will be created in the `seeds_dir` specified in the configuration file. By default, this is `database/seeds`.

```bash
elemental seed create <seeder_name>
```

## Run seeders

Run all pending seeds. This will create a changelog collection in the database if it does not exist. By default, this is `changelog`.

```bash
elemental seed up
```

## Rollback seeders

Rollback the last seed. This will remove the last entry in the changelog collection.

```bash
elemental seed down
```