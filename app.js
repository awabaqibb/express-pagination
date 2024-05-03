const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/pagination", {});

const users = require("./routes/users");
const posts = require("./routes/posts");
const User = require("./models/userSchema");

app.use("/users", users);
app.use("/posts", posts);

app.listen(process.env.PORT || 5000);
