let Inventory = require('../services/mongodb/models/Inventory');

const { validationResult } = require('express-validator');

exports.getInventories = async (req) => {
	try {
		const inventories = await Inventory.find({});
		return {
			message: 'All inventories fetched',
			data: { inventories },
			error: [],
			statusCode: 200,
			status: 1,
		};
	} catch (err) {
		console.log(err);
		return {
			data: null,
			error: [{ msg: error.message }],
			message: 'Internal server error',
			status: 0,
			statusCode: 500,
		};
	}
};

exports.addInventory = async (req) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return {
			data: null,
			error: errors.array(),
			message: 'validation Error',
			statusCode: 400,
			status: 0,
		};
	}

	try {
		const inventory = new Inventory(req.body);
		const inventorySaved = await inventory.save();

		return {
			message: 'Inventory added successfully',
			data: { inventory },
			error: [],
			statusCode: 200,
			status: 1,
		};
	} catch (err) {
		console.log(err);
		return {
			message: 'Server Error',
			data: null,
			error: [{ msg: error.message }],
			statusCode: 500,
			status: 0,
		};
	}
};

exports.updateInventory = async (req) => {
	try {
		const inventory = await Inventory.findOneAndUpdate(
			{ _id: req.params.id },
			req.body
		);

		return {
			message: 'Updated inventory Successfully',
			data: { inventory },
			error: [],
			statusCode: 200,
			status: 1,
		};
	} catch (err) {
		console.log(err);
		return {
			message: 'Server Error',
			data: null,
			error: [{ msg: error.message }],
			statusCode: 500,
			status: 0,
		};
	}
};

exports.deleteInventory = async (req) => {
	try {
		const inventory = await Inventory.findById(req.params.articleId);

		await inventory.remove();

		return {
			message: 'Deleted article successfully',
			data: { inventory },
			error: [],
			statusCode: 200,
			status: 1,
		};
	} catch (err) {
		console.log(err);
		return {
			error: [{ msg: error.message }],
			message: 'Internal server error',
			data: null,
			statusCode: 500,
			status: 0,
		};
	}
};
