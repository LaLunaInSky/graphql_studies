import { usuario } from "./usuario.ts"; 
import { perfil } from "./perfil.ts";
import { query } from "./query.ts";
import { shared } from "./shared.ts";
import { mutation } from "./mutation.ts";

export const typeDefs = [
    query,
    mutation,
    shared,
    usuario,
    perfil
]