'use strict'
var mongoose = require('mongoose');
require('dotenv').config();

const connect =  new Promise((resolve, reject) => {
  mongoose.Promise = global.Promise;
  // mongoose.connect('mongodb://localhost/camaras', { useNewUrlParser: true })
  mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
   resolve(console.log("Conexion establecida"));
  })
  .catch(err => {
    reject(console.log(err));
  });
});

module.exports = connect;



