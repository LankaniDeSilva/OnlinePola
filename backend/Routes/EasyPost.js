require("dotenv").config();
const express = require("express");
const EasyPost = require("@easypost/api");
const api = new EasyPost(process.env.EASYPOST_API_KEY);

const app = express.Router();

app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.post("/rate", (req, res) => {
  //@easypost/api library async request
  const shipment = new api.Shipment({
    to_name: {name: req.body.name},
    to_address: { zip: req.body.to_zip },
    from_address: { zip: '94104' },
    parcel: { weight: parseInt(req.body.weight) },
  });
  // shipment.save().then(console.log).catch(console.log);
  shipment.save().then((res) =>{
    console.log(res.id);
  }).catch(console.log);
});


module.exports = app;