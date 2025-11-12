import { gql } from "apollo-server";

export const contato = gql`
    type Contato {
        id: Int
        nome: String
        email: String
        telefone: String
    }
`;