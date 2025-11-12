export const Mutation = {
    criar_contato: async (
        _: undefined, {
            dados
        }, {
            ContatoServices
        }
    ) => {
        const {
            CriarUmNovoContato
        } = ContatoServices;

        return await CriarUmNovoContato(dados);
    },

    atualizar_contato: async (
        _: undefined,{
            id, 
            dados
        }, {
            ContatoServices
        }
    ) => {
        const {
            AtualizarContato
        } = ContatoServices;

        return await AtualizarContato(id, dados);
    },

    deletar_contato: async (
        _: undefined, {
            buscar_por
        }, {
            ContatoServices
        }
    ) => {
        const {
            DeletarContato
        } = ContatoServices;

        return await DeletarContato(buscar_por);
    }
}