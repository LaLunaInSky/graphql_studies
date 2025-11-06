import { gql } from "apollo-server";

export const query = gql`
    type Query {
        usuario(
            filtro: buscar_por
        ): Usuario!
        perfis: [Perfil]
        usuarios: [Usuario]
    }
`;