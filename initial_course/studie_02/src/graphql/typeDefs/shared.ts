import { gql } from "apollo-server";

export const shared = gql`
    input contato_informacoes_basicas {
        nome: String
        email: String
        telefone: String
    }

    input procurar_por {
        id: Int
        email: String
        telefone: String
    }
`;