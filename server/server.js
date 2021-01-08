const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const patient = require("./routes/api/patient")
const app = express();
const cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

app.use("/api/patient", patient);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server en écoute sur le port ${port} !`));
