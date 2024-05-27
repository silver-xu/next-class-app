import { Db, MongoClient, ServerApiVersion } from "mongodb";

export const dbUri =
    process.env.CONNECTION_STRING ||
    "mongodb+srv://<User>>:<Password>.@next-class-db.p6abndm.mongodb.net/?retryWrites=true&w=majority&appName=next-class-db;";

export class DbContext {
    private readonly client: MongoClient;

    public constructor() {
        this.client = new MongoClient(dbUri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: false,
                deprecationErrors: true,
            },
        });
    }

    public async connect(): Promise<Db> {
        await this.client.connect();
        return this.client.db("next-class");
    }

    public async close(): Promise<void> {
        await this.client.close();
    }
}
