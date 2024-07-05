import express from "express";
import { PORT } from "./config/server.config";
import bodyParser from "body-parser";
import apiRouter from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //revisit
app.use(bodyParser.text());

app.use("/api", apiRouter);

// common way to check server is running or not
app.get("/ping", (req, res) => res.send("pong"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
