const { MongoClient, ObjectId } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

async function connect() {

    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    // db.collection("post").insertMany([])

    // const result = await userCollection.deleteOne({firstName: "Ati"})
    const result = await userCollection.deleteOne({_id: new ObjectId("6852b64497968c267bc9a082")})
    

    // const anotherResult = await userCollection.deleteOne({firstName: "Sarah"})
    

    // remove duplicate data or more same data with same firstName
    const anotherResult = await userCollection.deleteMany({"address.city": "Anytown"})


    // find and remove the first one that find with n = 0 || n = 1
    // صحت وجود یک داکیومنت را بسنجید
    const anotherResultOne = await userCollection.findOneAndDelete({firstName: "Sarah"})


    // const result = await userCollection.deleteMany({firstName: "Ati"})
    console.log("Deleted user:", result, anotherResult, anotherResultOne)
    
}


connect()
