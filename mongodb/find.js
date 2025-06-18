const { MongoClient, ObjectId } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

async function connect() {

    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    // METHODS: $gte | $lte | $in

    //returns all users in case find is a {}
    // const users = await userCollection.find({ skills: "MongoDB"}).toArray();

    //returns user when birthday is greater than or equal to new Date("1990-01-01")
    // const users = await userCollection.find({ birthDate: {$gte: new Date("2001-01-01")}}).toArray();

   
    // const users = await userCollection.find({ birthDate: {$lte: new Date("2001-01-01")}}).toArray();

    // const users = await userCollection.find({ 'address.city': "Anytown"}).toArray();


    const users = await userCollection.find({ _id: {$in: [new ObjectId('6853177efebd48723b719c9e')]}}).toArray();
    const address = await userCollection.find({ 'address.city': {$in: ['tehran', 'Anytown']}}).toArray();

    //returns first result
    const findOne = await userCollection.findOne({})
    const findFirstUser = await userCollection.findOne({firstName: "Sarah"})

    console.log(findFirstUser, "RESULT")

}

connect()
