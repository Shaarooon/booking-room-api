const express = require("express");
const { createTodo, getTodo } = require("@/controllers/todoController");

const router = express.Router();

router.route("/").get(getTodo).post(createTodo);

module.exports = router;
