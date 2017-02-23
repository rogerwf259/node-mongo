const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to Mongodb Server', err);
  }
  console.log('Connected to Mongodb Server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //DeleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  //findOneandDELETE
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {console.log(result);});




/*-----------------------------*/


  // db.collection('Users').deleteMany({name: 'daniel'})
  //   .then((result) => {
  //     console.log(result);
  //   });


  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("58af2c3a5ab66165f790bb69")
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  //db.close();

});
