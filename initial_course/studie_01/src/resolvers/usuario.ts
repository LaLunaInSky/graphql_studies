import { db } from "../db/db.ts";

export const Usuario =  {
    perfil(obj) {
        return db.perfis.find(
            (perfil) => perfil.id === obj.perfil
        );
    }
};