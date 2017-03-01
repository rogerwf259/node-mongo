const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo findOneAndRemove
//Todo.findByIdAnRemove

Todo.findOneAndRemove({_id: '58b6fe1f5542cac0fc39ef25'})
  .then((todo) => console.log(todo))
  .catch((e) => console.log(e));

// Todo.findByIdAndRemove('58b6fe1f5542cac0fc39ef25')
//   .then((todo) => {
//     console.log(todo);
//   });
