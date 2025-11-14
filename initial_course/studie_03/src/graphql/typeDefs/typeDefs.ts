import {
    query
} from "./query.ts";
import { shared } from "./shared.ts";

import { 
    user
} from "./user.type.ts";

export const typeDefs = [
    query,
    shared,
    user
];