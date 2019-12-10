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

const users = require("./routes/api/issho/users");
const issho_members = require("./routes/api/issho/members");
const chats = require("./routes/api/issho/chats");
const news = require("./routes/api/news/news");
const posts = require("./routes/api/issho/posts");
const comments = require("./routes/api/issho/comments");
const bills = require("./routes/api/propublica/bills");
const issho_bills = require("./routes/api/issho/bills");
const members = require("./routes/api/propublica/members");
const statements = require("./routes/api/propublica/statements");
const messages = require("./routes/api/issho/messages");
const twitter = require("./routes/api/twitter/twitter");
const votes = require("./routes/api/propublica/votes");
// const elections = require("./routes/api/elections");
// const candidates = require("./routes/api/candidates");


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
app.use("/api/issho_members", issho_members);
app.use("/api/issho_bills", issho_bills);
app.use("/api/chats", chats);
app.use("/api/news", news);
app.use("/api/posts", posts);
app.use("/api/comments", comments);
app.use("/api/messages", messages);
app.use("/api/bills", bills);
app.use("/api/members", members);
app.use("/api/statements", statements);
app.use("/api/twitter", twitter);
app.use("/api/votes", votes);
// app.use("/api/elections", elections);
// app.use("/api/candidates", candidates);

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000);