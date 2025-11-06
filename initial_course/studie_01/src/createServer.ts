import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs/typeDefs.ts";
import { resolvers } from "./resolvers/resolvers.ts";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        if(
            error.message.startsWith(
                "Usuário já foi foi cadastrado antes!"
            ) || error.message.endsWith(
                "não existe!"
            )
        ) {
            return new Error(
                error.message
            )
        }

        return error;
    },
});

server.listen().then(({ url }) => console.log(`url: ${url}`));