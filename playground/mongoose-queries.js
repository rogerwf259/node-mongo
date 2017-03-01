const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58b6ecf37cc63118293fb9ec';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todos', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
  console.log('Todos By Id', todo);
}).catch((e) => console.log(e));

//var id = ;


// User.find({
//   _id: id
// }).then((users) => {
//   console.log('Users', users);
// });
//
// User.findOne({
//   _id: id
// }).then((user) => {
//   console.log('User', user);
// });
//
// User.findById('58b4b0c1967b3a801f87d568').then((user) => {
//   if (!user) {
//     return console.log('User not found');
//   }
//   console.log('User By ID : ', JSON.stringify(user, undefined, 2));
// }).catch((e) => console.log(e));
