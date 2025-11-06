import { db } from "../db/db.ts";
import { obterDadosDoUsuario } from "./functions.ts";

export const Query = {
    usuario(
        _: undefined, {
            filtro
        }
    ) {
        const {
            id,
            email
        } = filtro;

        const dadosDoUsuario = obterDadosDoUsuario(
            db.usuarios,
            id ? { id } : { email }
        );

        return dadosDoUsuario.usuarioDados;
    },
    usuarios() {
        return db.usuarios;
    },
    perfis() {
        return db.perfis;
    },
}