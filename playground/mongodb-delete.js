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
  //delete many
  // db.collection('Todos').deleteMany({text:'eat a potato'}).then((result) =>{
  //   console.log(result);
  // });
  //deleteone
  // db.collection('Todos').deleteOne({text:'eat a potato'}).then((result) =>{
  //   console.log(result);
  // });
  //findOneandDelete
  // db.collection('Todos').findOneAndDelete({completed:true}).then((result) =>{
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name:'Sakar Lama'}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b1265dedb22d322e8c5dca4")}).then((result) =>{
    console.log(JSON.stringify(result,undefined,2));
  });
  //db.close();
});
