import knex from "knex";
import config from "../../knexfile.ts";

const enviroment = process.env.NODE_ENV || "development";

const KnexDb = knex(config[enviroment]);

export default KnexDb;