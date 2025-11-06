import {
    gql
} from "apollo-server";

export const usuario = gql`
    type Usuario {
        id: ID,
        nome: String, 
        email: String,
        telefone: String,
        perfil: Perfil
    }
`;