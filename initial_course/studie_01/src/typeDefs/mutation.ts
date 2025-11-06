import { gql } from "apollo-server";

export const mutation = gql`
    type Mutation {
        criar_usuario(
            dados_principais: usuario_basico!
        ): Usuario!,

        atualizar_usuario(
            id: Int!
            dados_principais: usuario_basico
            perfil: Int
        ): Usuario!,

        deletar_usuario(
            filtro: buscar_por
        ): Boolean!
    }
`;