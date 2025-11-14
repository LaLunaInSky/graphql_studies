export const query = `#graphql
    type Query {
        users: [User]
        user(
            search_by: filter_search_by
        ): User
    }
`