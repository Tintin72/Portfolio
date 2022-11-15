const express = require("express");

// const sendSMS = require('./sendSMS.js');

module.exports = function smsServer() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // const url = "https://livdifi.africastalking.ke.drelm.io"

  // TODO: Incoming messages route

  app.post("/incoming-messages", (req, res) => {
    const data = req.body;
    console.log(`Received message: \n ${data}`);
    res.sendStatus(200);
  });

  // TODO: Delivery reports route

  const port = process.env.PORT;

  app.listen(port, () => {
    console.log(`App running on port: ${port}`);

    // TODO: call sendSMS to send message after server starts
    // sendSMS();
  });
};
