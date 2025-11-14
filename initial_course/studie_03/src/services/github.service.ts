import {
    RESTDataSource
} from "@apollo/datasource-rest";

export class GitHubService extends RESTDataSource {
    constructor() {
        super();

        this.baseURL = "https://api.github.com";
    }

    async GetUser(
        login: string
    ) {
        try {
            return await this.get(`/users/${login}`)
        } catch (error) {
            throw new Error(error);
        }

    }
}