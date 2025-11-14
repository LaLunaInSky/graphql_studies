import { 
    ApolloServer
} from "@apollo/server";

import {
    startStandaloneServer
} from "@apollo/server/standalone";

import {
    typeDefs
} from "./graphql/typeDefs/typeDefs.ts"

import {
    resolvers
} from "./graphql/resolvers/resolvers.ts";

import { 
    UserServices
} from "./services/user.service.ts";

import { 
    GitHubService
} from "./services/github.service.ts";

interface ContextValues {
    dataSources: {
        user: UserServices;
        githubAPI: GitHubService;
    }
}
 
const server = new ApolloServer<ContextValues>({
    typeDefs,
    resolvers,
    formatError: (error) => error.message,
})

const {
    url
} = await startStandaloneServer(
    server, {
        listen: {
            port: 4000
        },
        context: async () => {
            const {cache} = server;

            return {
                dataSources: {
                    user: new UserServices(),
                    githubAPI: new GitHubService({cache})
                }
            }
        }
    },
);

console.log(
    `Server ready at: ${url}`
);