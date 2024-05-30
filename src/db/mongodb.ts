import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.CONNECTION_STRING ?? "";
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: false,
        deprecationErrors: true,
    },
};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    console.log("Environment is dev, connection sharing will be used");
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>;
    };

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // In production mode, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export { clientPromise };
