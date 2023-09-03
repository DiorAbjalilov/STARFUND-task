// src/index.ts
import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { routers } from "./routes";

// dot env file config
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5051;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware localhost config
app.use(cors());

app.use("/api", routers);

createConnection()
  .then(() => {
    console.log("Connected to the database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error: ", error);
  });
