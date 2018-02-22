// valid for Mongoose 5.0.0-rc0 and above
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  console.log('=> using new database connection');
  return mongoose.connect(process.env.DB)
    .then(db => {
      isConnected = db.connections[0].readyState;
    });
};
