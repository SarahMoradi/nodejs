const { MongoClient } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

async function connect() {
  try {
    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    const result = await userCollection.insertOne({
        firstName: "John",
        lastName: "Doe",
        age: 30,
        skills: ["JavaScript", "Node.js", "MongoDB"],
        identity: '123456789',
        birthDate: new Date("1990-01-01"),
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345"
        } 
    })
    console.log("Inserted user:", result)
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
