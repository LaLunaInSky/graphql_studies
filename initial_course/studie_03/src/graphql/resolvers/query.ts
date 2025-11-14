export const Query = {
    users: async (
        _, __, 
        { datasources }
    ) =>  {
        const {
            GetAllUsers
        } = datasources.user;

        return await GetAllUsers();
    },

    user: async (
        _, { search_by }, 
        { dataSources }
    ) => {
        const primaryKeySearchBy = Object.keys(search_by)[0];
        const primaryValueSearchBy = Object.values(search_by)[0];

        switch (primaryKeySearchBy) {
            case "id": {
                const {
                    GetUserBy
                } = dataSources.user;

                return await GetUserBy(search_by);
            }
            case "login": {
                const {
                    GetUser
                } = dataSources.githubAPI;

                return await GetUser(primaryValueSearchBy);
            }
        }
    }
}