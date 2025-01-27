const { connect, connection } = require('mongoose');

// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/expenseTracker';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 console.log('db connected');
// Export connection 

module.exports = connection;
