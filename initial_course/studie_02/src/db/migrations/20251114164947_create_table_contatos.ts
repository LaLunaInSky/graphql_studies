import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('contatos', (table) => {
        table.increments("id").primary();
        table.string("nome").notNullable();
        table.string("email").notNullable().unique();
        table.string("telefone").notNullable().unique();
    });
};


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("contatos");
}

