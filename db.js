const mongoose = require('mongoose');

mongoose
  .connect("mongodb+srv://video:TF31G68rM4J1K8Ms@cluster0.uasgf.mongodb.net/videobanalo?retryWrites=true&w=majority&ssl=false", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error('Connection error----', e.message);
  });

const db = mongoose.connection;

module.exports = db;
