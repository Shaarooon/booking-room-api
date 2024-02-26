require("dotenv").config();
require("module-alias/register");
require("express-async-errors");
const express = require("express");
const morgan = require("morgan");
const connect = require("@/db/connect");
const todoRouter = require("@/routes/todo");

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/todos", todoRouter);

app.listen(5000, async () => {
	await connect();
	console.log("Server is running on port 5000");
});
