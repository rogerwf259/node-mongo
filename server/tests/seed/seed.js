const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const User1ID = new ObjectID();
const User2ID = new ObjectID();

const users = [{
  _id: User1ID,
  email: 'andrew@example.com',
  password: 'UserOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: User1ID, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: User2ID,
  email: 'jen@example.com',
  password: 'jen456'
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo'
  },{
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 22
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
      return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};


module.exports = {todos, populateTodos, users, populateUsers};
