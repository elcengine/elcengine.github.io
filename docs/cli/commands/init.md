---
sidebar_position: 1
---

# Init

Initializes a new default configuration file for the Elemental CLI.

```bash
elemental init
```

You can also specify a MongoDB connection string as an argument to the command. This will be used as the connection string in the configuration file.

```bash
elemental init mongodb://localhost:27017
```

## The configuration file

The elemental config file is a YAML or JSON file with one of the following names:

- .elementalrc
- .elemental.yaml
- .elemental.yml
- elemental.json
- elemental.yaml
- elemental.yml

The default configuration file is `.elementalrc`. The configuration file is created in the current working directory when you run the `elemental init` command. If a configuration file already exists, it will not be overwritten.

## Example configuration file

```json
{
  "connection_str": "mongodb://localhost:27017",
  "migrations_dir": "database/migrations",
  "seeds_dir": "database/seeds",
  "changelog_collection": "changelog"
}
```

### Environment variables

The elemental config file also supports reading from environment variables. For example, you can specify the `connection_str` as `<DB_CONNECTION_STRING>` in the config file, and it will be replaced with the value of the `DB_CONNECTION_STRING` environment variable during runtime.

```json
{
  "connection_str": "<DB_CONNECTION_STRING>"
}
```

If a `.env` file is present in the same directory as the config file, it will pick up the environment variables from there. It also uses the environemnt variable `APP_ENV` to look for .env file variants if specified. If the `APP_ENV` variable is set to `production`, it will look for a `.env.production` file. If it is set to `development`, it will look for a `.env.development` file. The environment variables are loaded using the [**godotenv**](https://github.com/joho/godotenv) package.