import { gql } from "apollo-server";

export const shared = gql`
    enum tipo_perfil {
        ADMIN
        NORMAL
    }

    input usuario_basico {
        nome: String
        email: String
        telefone: String
    }

    input buscar_por {
        id: Int,
        email: String
    }
`;