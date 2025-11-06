interface dadosDeUsario {
    nome: string,
    id: number,
    telefone: string,
    email: string,
    perfil: number
}

export const generadorDeId = (
    lista_de_usarios: {}[]
) => {
    const toalDeUsuarios = lista_de_usarios.length;
    const ultimoUsuarioDaLista = lista_de_usarios[toalDeUsuarios - 1];

    const novoId = ultimoUsuarioDaLista.id + 1;

    return novoId;
}

export const obterDadosDoUsuario = (
    listaDeUsarios: dadosDeUsario[],
    filtro: {}
) => {
    let usuarioDados: dadosDeUsario = {};

    let existeOUsario = false;

    let indexDoUsuario = 0;

    listaDeUsarios.find(
        (
            usuario,
            index
        ) => {
            if (
                filtro
            ) {
                const chaveDoFiltro = Object.keys(filtro)[0];

                const valorDoFiltro = Object.values(filtro)[0]

                if (
                    usuario[chaveDoFiltro] === valorDoFiltro
                ) {
                    indexDoUsuario = index; 

                    usuarioDados = usuario;

                    existeOUsario = true;
                }
            }
        }
    );

    return {
        usuarioDados,
        indexDoUsuario,
        existeOUsario
    };
}

export const atualizarDadosDoUsuario = (
    dadosPassados,
    usuario: dadosDeUsario
) => {
    const {
        dados_principais,
        perfil
    } = dadosPassados;

    const chavesDados_principais = Object.keys(dados_principais);

    chavesDados_principais.forEach(
        (chave) => {
            if (
                dados_principais[chave]
            ) {
                usuario[chave] = dados_principais[chave];
            }
        }
    );


    if (
        perfil
    ) {
        if (
            perfil > 0 && perfil <= 2
        ) {
            usuario.perfil = perfil;
        }
    }

    return usuario;
}