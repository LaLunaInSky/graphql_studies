import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("users", (table) => {
        table.increments("id").primary();

        table.string('login').notNullable().unique();

        table.string("avatar_url").notNullable();
    });
};


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("users");
}