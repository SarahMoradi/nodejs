const { MongoClient } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

async function connect() {

    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    //===========================================
    // In projection;
    //  if you set a property to 0;
    //  the property will be ignored.
    //  if you set a property to 1;
    //  that property will be shown just.
    //===========================================

    // const users = await userCollection.findOne({
    //      _id: {$in: [new ObjectId('6853175eff955ba58831dd0f')]}
    // }, {
    //     projection: {
    //         age: 0,
    //         birthDate: 0
    //     }
    // })
    
    // const users = await userCollection.findOne({
    //      _id: {$in: [new ObjectId('6853175eff955ba58831dd0f')]}
    // }, {
    //     projection: {
    //         firstName: 1,
    //         lastName: 1
    //     }
    // })

    //===========================================
    // limit define the number will be returned and shown.
    // skip is ignoring from the first element.
    //===========================================

    // const users = await userCollection.find({}, {
    //     limit: 1,
    //     skip: 1
    // }).toArray()

    //===========================================
    // sort -1 and 1 for:
    //  sort -1: from bigger the smaller;
    //  sort 1: from smaller to bigger.
    //===========================================

    //Descending -1:last 1:first
    // const users = await userCollection.find({}, {
    //     sort: {_id: -1}
    // }).toArray()

    const users = await userCollection.find({}, {
        sort: {age: -1}
    }).toArray()
    
    
    console.log(users, "RESULT")

}

connect()
