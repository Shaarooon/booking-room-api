const statusCodes = require("http-status-codes");
const Todo = require("../models/todoModel");

exports.getTodo = async (req, res) => {
	const todoData = await Todo.find({});
	res.status(statusCodes.OK).json(todoData);
};

exports.createTodo = async (req, res) => {
	console.log(req.body);

	const data = await Todo.create(req.body);

	console.log(data);

	res.status(statusCodes.CREATED).json({ message: "Todo created" });
};
