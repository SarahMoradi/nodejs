const { MongoClient } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

async function connect() {

    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    const result = await userCollection.aggregate([
        {
            $match: {
                firstName: "Sarah"
            }
        },
        {
            $addFields: {
                "userAge": "$age"
            }
        },
        {
            $project: {
                skills: 1
            }
        }
    ]).toArray()
    
    
    console.log(result, "RESULT")

}

connect()
