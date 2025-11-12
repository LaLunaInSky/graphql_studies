import { contato } from "./contato.ts";
import { mutation } from "./mutation.ts";
import { query } from "./query.ts";
import { shared } from "./shared.ts";

export const typeDefs = [
    query,
    mutation,
    shared,
    contato
]