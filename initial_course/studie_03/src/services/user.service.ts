import db from "../db/knexDb.ts";

export class UserServices {
    async GetAllUsers() {
        try {
            const users = await db("users").select("*");

            return users;
        } catch (_) {
            throw new Error(
                `Não foi possível obter os users`
            );
        }
    }

    async GetUserBy (
        search_by
    ) {
        const primaryKeySearchBy = Object.keys(search_by)[0];
        const primaryValueSearchBy = Object.values(search_by)[0];

        try {
            let userSelected;

            switch (primaryKeySearchBy) {
                case "id": {
                    userSelected = await db("users").where({
                        id: primaryValueSearchBy
                    });

                    break;
                }
                case "login": {
                    userSelected = await db("users").where({
                        login: primaryValueSearchBy
                    });
                    
                    break;
                }
            }

            if (
                userSelected
            ) {
                throw new Error(
                    `com o ${primaryKeySearchBy} (${primaryValueSearchBy})`
                );
            }

            return userSelected;
        } catch (error) {
            throw new Error(
                `Não foi possível obter o user: ${error.message}`
            );
        }
    }
}