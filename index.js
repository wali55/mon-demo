const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mon-demo', {serverSelectionTimeoutMS: 10})
.then(() => console.log('Database connected'))
.catch((e) => console.log(e))
.finally(() => mongoose.connection.close());