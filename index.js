const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const cars = [
  {
    model: "Mercedes",
    topSpeed: 180,
    id: 1,
  },
  {
    model: "Opel",
    topSpeed: 150,
    id: 2,
  },
  {
    model: "Toyota",
    topSpeed: 160,
    id: 3,
  },
];

app.get("/", (req, res) => {
  res.send(`<input placeholder="anything"></input>`);
});

app.get("/api/cars", (req, res) => {
  res.json(cars);
});

app.post("/api/cars", (req, res) => {
  if (!req.body.name || !req.body.speed) {
    return res.status(400).json({ msg: "Missing parameters" });
  }
  const dummyCar = {
    model: req.body.name,
    topSpeed: Number(req.body.speed),
    id: cars.length + 1,
  };

  cars.push(dummyCar);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
