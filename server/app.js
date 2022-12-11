const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postModal = require("./postmodal");
const app = express();
mongoose.set("strictQuery", false);

app.use(express.json({ limit: "30mb", extended: true }));

app.use(cors());

app.listen(process.env.PORT || 3002, (err) => {
  if (!err) {
    console.log("Server is started at 3002");
  } else console.log(err);
});
const mongodb =
  "mongodb+srv://MOUNEEL213:mouneel2purkas@project-1.vmb9zsr.mongodb.net/instagram?retryWrites=true&w=majority";
mongoose.connect(
  mongodb,
  (data) => {
    console.log("Successfully connect to db");
  },
  (err) => {
    console.log(err);
  }
);

app.get("/data", (req, res) => {
  postModal
    .find()
    .then((data) => {
      res.status(200).send({ images: data });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.post("/postdata", (req, res) => {
  console.log(req.body);
  var today = new Date();
  var options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    time: "numeric",
  };
  var setday = today.toLocaleDateString("en-US", options);
  console.log(setday);
  postModal
    .create({
      author: req.body.author,
      location: req.body.location,
      image: req.body.image,
      likes: Math.round(Math.random() * 10),
      date: setday,
      description: req.body.description,
    })
    .then((post) => {
      res.status(200).send(post);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
