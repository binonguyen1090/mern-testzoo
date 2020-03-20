const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI
const bodyParser = require('body-parser');
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const forms = require("./routes/api/forms");
// const create_forms = require("./routes/api/create_forms");
const questions = require("./routes/api/questions")
const User = require("./models/User");


if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);


app.get("/", (req, res) => res.send("Hello World 111 !!"));

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use("/api/users", users);
app.use("/api/forms", forms);
// app.use("/api/create_forms", forms);

// app.use("/api/questions", questions);

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });
