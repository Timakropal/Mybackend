// const express = require("express");

// const app = express();

// app.get("/main", (req, res) => {
//   res.send("asfasd");
// });

// app.listen(3000, () => {
//   console.log("получилось ");
// });
const path = "";
import cors from "cors";

import express from "express";
const app = express();
const a = { blue: "blue" };

app.use(cors());
app.get("/main", (req, res) => {
  res.json(a);
});

app.get("/mainx", (req, res) => {
  res.send("HELLO WORLD second");
});

app.listen(3001, () => {
  console.log("HELLO WORLD SECOND");
});
