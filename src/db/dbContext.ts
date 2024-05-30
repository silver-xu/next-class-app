import { clientPromise } from "./mongodb";
import { Db } from "mongodb";

export const dbUri = process.env.CONNECTION_STRING ?? "";

export class DbContext {
    public constructor() {}

    public async connect(): Promise<Db> {
        const client = await clientPromise;
        return client.db("next-class");
    }
}
