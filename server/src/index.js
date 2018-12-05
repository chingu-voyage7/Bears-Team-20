import express from "express";
import mongoose from "./configuration/mongoose";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});