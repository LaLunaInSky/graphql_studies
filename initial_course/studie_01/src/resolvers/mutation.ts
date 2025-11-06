import { db } from "../db/db.ts"
import {
    generadorDeId,
    obterDadosDoUsuario,
    atualizarDadosDoUsuario
} from "./functions.ts"

export const Mutation = {
    criar_usuario(
        _: undefined, { 
            dados_principais 
        }
    ) {
        const {
            email
        } = dados_principais;

        const dadosDoUsuario = obterDadosDoUsuario(
            db.usuarios,
            { email }
        );

        if (
            !dadosDoUsuario.existeOUsario
        ) {
            const novoUsuario = {
                ...dados_principais,
                id: db.usuarios.length === 0 ? 1 : generadorDeId(db.usuarios),
                perfil: 2
            };
    
            db.usuarios.push(
                novoUsuario
            );
    
            return novoUsuario;
        } else {
            const idDoUsuarioJaCadastrado = db.usuarios.find(
                (usuario) => usuario.email === email
            )?.id;

            throw new Error(`Usuário já foi foi cadastrado antes! ID: ${
                idDoUsuarioJaCadastrado
            }`);
        }
    },

    atualizar_usuario(
        _: undefined, 
        args
    ) {
        const {
            id
        } = args;

        let dadosDoUsuario = obterDadosDoUsuario(
            db.usuarios,
            { id }
        );

        if(
            dadosDoUsuario.usuarioDados
        ) {
            dadosDoUsuario.usuarioDados = atualizarDadosDoUsuario(
                args,
                dadosDoUsuario.usuarioDados
            );

            db.usuarios[
                dadosDoUsuario.indexDoUsuario
            ] = dadosDoUsuario.usuarioDados;

            return db.usuarios[
                dadosDoUsuario.indexDoUsuario
            ];
        } else {
            throw new Error(`Usuário com o ID: ${args.id} não existe!`)
        }
    },

    deletar_usuario(
        _: undefined, {
            filtro
        }
    ) {
        const {
            id,
            email
        } = filtro;

        const dadosDoUsuario = obterDadosDoUsuario(
            db.usuarios,
            id ? { id } : { email }
        )

        db.usuarios.splice(
            dadosDoUsuario.indexDoUsuario, 1
        );
        
        return !!dadosDoUsuario.usuarioDados;
    }
}