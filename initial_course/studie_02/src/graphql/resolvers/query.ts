export const Query = {
    contatos: async (
        _, __, {
            ContatoServices
        }
    ) => {
        const {
            ObterTodosOsContatos
        } = ContatoServices;

        return await ObterTodosOsContatos();
    },
    contato: async (
        _, {
            buscar_por
        }, { 
            ContatoServices 
        }
    ) => {
        const {
            BuscarContato
        } = ContatoServices;

        return await BuscarContato(
            buscar_por, 
            true
        );
    }
}