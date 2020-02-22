const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url, { useUnifiedTopology: true });
const dbName = 'names';

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function(err, result) {
    console.log('Inserted 3 documents into the collection');
    callback(result);
  });
};

client.connect(() => {
  const db = client.db(dbName);

  console.log(`Successfully connected to database`);

  // insertDocuments(db, console.log);

  client.close();
});
