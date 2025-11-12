export class ContatoManipulationsServices {
    private dataBase;

    constructor(
        db
    ) {
        this.dataBase = db;
    }

    ObterTodosOsContatos = async () => {
        try {
            const contatos = await this.dataBase("contatos").select("*");

            return contatos;
        } catch (error) {
            throw new Error(
                `Não foi posssível obter os contatos; ${error}`
            );
        }
    }

    CriarUmNovoContato = async (
        dados
    ) => {
        const {
            nome,
            email,
            telefone
        } = dados;

        try {
            const emailLiberado = await this.BuscarContato({email}, false);
            const telefoneLiberado = await this.BuscarContato({telefone}, false);

            if (
                emailLiberado && telefoneLiberado
            ) {
                const contatoCriado  = (await this.dataBase("contatos").insert({
                    id: await this.GeradorDeId(),
                    nome: nome,
                    email: email,
                    telefone: telefone
                }).returning("*"))[0];
            
                return contatoCriado;
            } else {
                if (!emailLiberado) {
                    throw new Error(
                        `O email já existe em um outro contato!`
                    );
                }

                if (!telefoneLiberado) {
                    throw new Error(
                        `O telefone já existe em um outro contato!`
                    );
                }
            }

        } catch (error) {
            throw new Error(
                `Não foi possível criar o contato; ${error.message}`
            );
        }
    }

    GeradorDeId = async () => {
        const contatos = await this.dataBase("contatos").select("*");

        const totalDeContatos = contatos.length;
        
        let próximoID = 1;

        if (totalDeContatos > 0) {
            const ultimoContato = contatos[totalDeContatos - 1];

            próximoID = ultimoContato.id + 1;
        }

        return próximoID;
    }

    BuscarContato = async (
        buscar_por,
        retornarOErro: boolean
    ) => {
        const primeiraChaveDoBuscarPor = Object.keys(buscar_por)[0];
        const primeiroValorDoBuscarPor = Object.values(buscar_por)[0];

        try {      
            let contatoSelecionado;
            
            switch (primeiraChaveDoBuscarPor) {
                case "id": {
                    contatoSelecionado = (await this.dataBase("contatos")
                    .where({
                        id: primeiroValorDoBuscarPor
                    }))[0];

                    break;
                }
                case "email": {
                    contatoSelecionado = (await this.dataBase("contatos")
                    .where({
                        email: primeiroValorDoBuscarPor
                    }))[0];

                    break;
                }
                case "telefone": {
                    contatoSelecionado = (await this.dataBase("contatos")
                    .where({
                        telefone: primeiroValorDoBuscarPor
                    }))[0];

                    break;
                }
            }

            if (!contatoSelecionado) {
                if (retornarOErro) {
                    throw new Error(
                        `Contato com o ${
                            primeiraChaveDoBuscarPor
                        }: (${
                            primeiroValorDoBuscarPor
                        }) não encontrado!`
                    );
                } else{
                    return true;
                }
            }

            if (retornarOErro) {
                return contatoSelecionado;
            } else {
                return false;
            }
        } catch (error) {
            throw new Error(
                `Não foi possível obter o contato; ${error.message}`
            );
        }
    }

    AtualizarContato = async (
        id: number,
        dados
    ) => {
        try {    
            await this.BuscarContato({id: id}, true)

            const contatoSelecioando = (await this.dataBase("contatos").where({
                id: id
            }).update(dados).returning("*"))[0];
        
            return contatoSelecioando;
        } catch (error) {
            throw new Error(
                `Não foi possível atualizar o contato; ${error.message}`
            )
        }
    }

    DeletarContato = async (
        buscar_por
    ) => {
        const primeiraChaveDoBuscarPor = Object.keys(buscar_por)[0];
        const primeiroValorDoBuscarPor = Object.values(buscar_por)[0]; 

        try {
            await this.BuscarContato(buscar_por, true);

            switch (primeiraChaveDoBuscarPor) {
                case "id": {
                    await this.dataBase("contatos").where({
                        id: primeiroValorDoBuscarPor
                    }).delete();

                    break;
                }
                case "email": {
                    await this.dataBase("contatos").where({
                        email: primeiroValorDoBuscarPor
                    }).delete();
                    
                    break;
                }
                case "telefone": {
                    await this.dataBase("contatos").where({
                        telefone: primeiroValorDoBuscarPor
                    }).delete();
                    
                    break;
                }
            }   

            return `O contato com o ${primeiraChaveDoBuscarPor}: (${primeiroValorDoBuscarPor}) foi deletado com sucesso!`;
        } catch (_) {
            throw new Error(
                `Não foi possível deletar o contato com o ${primeiraChaveDoBuscarPor}: (${primeiroValorDoBuscarPor})`
            );
        }
    }
}