const { MongoClient } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

// new MongoClient(DB_url).db(DB_name).collection("user")
// new MongoClient(DATABASE_URL).db(DATABASE_NAME).collection(DATABASE_DOCUMENT)

async function connect() {
  try {
    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    const users = await userCollection.find({}).toArray()
    console.log(users)
    console.log("✅ Connected to MongoDB")
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error)
  } finally {
    await client.close()
  }
}

connect()
