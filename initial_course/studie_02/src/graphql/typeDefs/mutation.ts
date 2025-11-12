import { gql } from "apollo-server";

export const mutation = gql`
    type Mutation {
        criar_contato(
            dados: contato_informacoes_basicas!
        ): Contato!,
        atualizar_contato(
            id: Int!
            dados: contato_informacoes_basicas!
        ): Contato!,
        deletar_contato(
            buscar_por: procurar_por!
        ): String!
    }
`;