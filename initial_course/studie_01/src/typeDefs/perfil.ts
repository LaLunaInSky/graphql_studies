import { gql } from "apollo-server";

export const perfil = gql`
    type Perfil {
        id: Int,
        descricao: tipo_perfil
    }
`;