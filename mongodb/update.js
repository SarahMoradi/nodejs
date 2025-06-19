const { MongoClient, ObjectId } = require("mongodb")

const DB_url = "mongodb://localhost:27017"
const DB_name = "mongodb_nodejs"

const client = new MongoClient(DB_url)

async function connect() {

    await client.connect()
    const db = client.db(DB_name)
    const userCollection = db.collection("user")

    //METHODS:
    // $set(add or change) | $unset (remove) | $push(add array) | $pull(remove array) | $inc | $rename

    //UPDATE(CHANGE): upsert true means if it does not find; create new value with this property.
    const change = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $set: {age: 29}
    }, {
        upsert: true
    })
    
    //UPDATE(ADD)
    const addToArray = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $push: {skills: "PHP"}
    })

    //UPDATE(DELETE)
    const removeFromArray = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $pull: {skills: "Node.js"}
    })

    //UPDATE(INCREMENT)
    const increment = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $inc: {age: 2}
    })

    //UPDATE(DECREMENT)
    const decrement = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $inc: {age: -2}
    })

    //UPDATE(RENAME)
    const rename = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $rename: {userAge: 'age'}
    })

    //UPDATE(Remove Property)
    const unset = await userCollection.updateOne({_id: new ObjectId("6853175eff955ba58831dd0f")}, {
        $unset: {identity: '123456789'}
    })

    //UPDATE(MULTIPLE)
    const updateMany = await userCollection.updateMany({firstName: "Sarah"}, {
        $set: {age: 20}
    })

    //UPDATE(MULTIPLE)
    const findAndUpdate = await userCollection.findOneAndUpdate({firstName: "Sarah"}, {
        $set: {age: 36}
    })



    console.log("updated data: ", findAndUpdate)


}

connect()
