
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Tik-Tik:database@cluster0.bitqj.mongodb.net/Tik-Tik?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
  
});

export default dbConnection;