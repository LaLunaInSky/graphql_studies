import {
    ApolloServer
} from "apollo-server";

import { typeDefs } from "./graphql/typeDefs/typeDefs.ts";

import {
    resolvers
} from "./graphql/resolvers/resolvers.ts";

import { 
    ContatoManipulationsServices
} from "./services/contato_manipulations_services.ts";

import db from "./db/index.ts";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (error) => {
        return error.message
    },
    context: () => ({
      ContatoServices: new ContatoManipulationsServices(db)  
    })
});

server.listen().then(({
    url
}) => console.log(
    `Server started in: ${url}`
));