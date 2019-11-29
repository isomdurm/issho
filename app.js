const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// Messages Sockets
const http = require('http').Server(app);
const io = require('socket.io')(http);

const users = require("./routes/api/users");
const chats = require("./routes/api/chats");
const news = require("./routes/api/news");
const posts = require("./routes/api/posts");
const comments = require("./routes/api/comments");
const civics = require("./routes/api/civics");


// PRODUCT LAUNCH
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// BASE
app.get("/", (req, res) => res.send("Hello darkness my old friend"));

app.use(passport.initialize());
require('./frontend/passport')(passport);

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/api/users", users);
app.use("/api/chats", chats);
app.use("/api/news", news);
app.use("/api/posts", posts);
app.use("/api/comments", comments);
app.use("/api/civics", civics);

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);