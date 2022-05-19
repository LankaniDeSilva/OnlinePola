const express = require("express");

const service = express.Router();

const Vonage = require("@vonage/server-sdk");

const vonage = new Vonage({
  apiKey: "1fe706fa",
  apiSecret: "goefV6glmeGKC6HO",
});

service.post("/sms", (req, res) => {
  let number = req.body.number;
  let getMsg = req.body.sendmsg;

 console.log(getMsg);

  const from = "Vonage APIs";
  const to = number;
  const text = getMsg;

  vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });
});

module.exports = service;
