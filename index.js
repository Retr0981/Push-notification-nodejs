const express = require("express");
const webpush =require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//Set Static path 
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = ""
const privateVapidKey =""

webpush.setVapidDetails("mailto:test@test.com",publicVapidKey, privateVapidKey);

//Subscribe Route
app.post("/subscribe" , (req,res) => {
  //Get pushSubscription Object
  const subscription = req.body;

  //Send 201 - resource created 
  res.status(201).json({});

  //Build a payload 
  const payload = JSON.stringify({title: "Push Test"});

  //Pass Object into sendNotifcation 
  webpush
  .sendNotification(subscription, payload);
  .catch(err => console.error(err));

});

const port = 5000;

app.listen(port, () => console.log(`Server started on ${port} `));
