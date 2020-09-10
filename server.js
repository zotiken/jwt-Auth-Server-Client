const express = require("express");
const app = express();
const routerAuth = require("./routes/auth");
const mongoose = require("mongoose");
const config = require("config");

app.use(express.static("src"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/app/auth", routerAuth);

async function start(params) {
  try {
    await mongoose.connect(
      config.get("App.mDb.urlc").replace("<password>", config.get("App.password")),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );

    app.listen(config.get("App.port"), () => {
      console.log(`Server has been started on Port - ${config.get("App.port")}`);
    });
  } catch (e) {
    console.log("ERROR", e);
  }
}

start(); // start server
