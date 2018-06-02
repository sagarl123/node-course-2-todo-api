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
  // db.collection('Todos').find({_id :new ObjectID('5b126b7dfa6148aa4afc1fba')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('Ubable to fetch todos',err);
  // })
  db.collection('Users').find({name:'Sagar Lamichhane'}).toArray().then((docs)=> {
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));

  },(err) =>{
    console.log('Ubable to fetch todos',err);
  });
  //db.close();
});
