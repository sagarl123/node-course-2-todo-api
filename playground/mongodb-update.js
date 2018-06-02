//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  else{
    console.log('Connected to MongoDB server');
  }
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b12831efa6148aa4afc273d')
  // },{
  //   $set:{
  //     completed: false
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) =>{
  //   console.log(result);
  // });
  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('5b126498a08fbd105cb5c7aa')
  // },{
  //   $set:{
  //     name:'Sagar Lamichhane'
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result) =>{
  //   console.log(result);
  // });
  db.collection('Users').update(
    {_id: new ObjectID('5b126498a08fbd105cb5c7aa')},
    {$inc:{age:-2}}
  ).then((result)=>{
    console.log("result");
  });
  //db.close();
});
