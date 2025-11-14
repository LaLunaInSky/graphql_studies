import Knex from "knex";

// Update with your config settings.

const infosDataBase = {
  database: "postgres",
  user: "postgres",
  password: "postgres_studie_03"
}

const config: { [key: string]: Knex.Knex.Config } = {
  development: {
    client: "pg",
    connection: infosDataBase,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations"
    }
  },

  staging: {
    client: "pg",
    connection: infosDataBase,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations"
    }
  },

  production: {
    client: "pg",
    connection: infosDataBase,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations"
    }
  }

};

export default config;