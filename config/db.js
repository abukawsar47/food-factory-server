const mongoose = require("mongoose");

const config = require("./config");

const dbURL = `mongodb+srv://${config.db.DB_USER}:${config.db.DB_PASS}@cluster0.or0gn.mongodb.net/foodFactoryCollection?retryWrites=true&w=majority`;

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Wow, Database Is Connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
