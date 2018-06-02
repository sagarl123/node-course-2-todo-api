//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);
// var user = {name: 'andrew', age:25};
// var{name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  else{
    console.log('Connected to MongoDB server');
  }
  //
  // db.collection('Users').insertOne({
  //   name:'Sakar Lama',
  //   age:22,
  //   address:'Kalanki'
  // },(err,result)=>{
  //   if(err){
  //     return console.log('unable to insert Users',err);
  //   }
  //
  //     console.log(result.ops[0]._id.getTimestamp());
  // });
  db.close();
});
