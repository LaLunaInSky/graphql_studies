import { gql } from "apollo-server";

export const query = gql`
    type Query {
        contatos: [Contato]!
        contato(
            buscar_por: procurar_por!
        ): Contato!
    }
`