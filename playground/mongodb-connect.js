// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server', err);
  }
  console.log('Connected to Mongodb Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert To do', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'daniel',
  //   age: 22,
  //   location: 'Mexico'
  // }, (err, result) => {
  //   if (err) { return console.log('Unable to insert User', err);}
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID('58af0ce713a68903e40dca34')
  // }).toArray()
  //   .then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch((err) => {
  //     console.log('Unable to fetch Todos', err);
  //   });

  // db.collection('Todos').find().count()
  //   .then((count) => {
  //     console.log(`Todos count ${count}`);
  //   })
  //   .catch((err) => {
  //     console.log('Unable to fetch Todos', err);
  //   });

  db.collection('Users').find({name: 'daniel'}).toArray()
    .then((docs) => {
      console.log('Todos');
      console.log(JSON.stringify(docs, undefined, 2));
    })
    .catch((err) => {
      console.log('Unable to fetch Todos', err);
    });

  // db.close();
});
