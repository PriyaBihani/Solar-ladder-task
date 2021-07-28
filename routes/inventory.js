var express = require('express');
let inventoryController = require('../controllers/inventoryController');
const { check } = require('express-validator');

var router = express.Router();

router.get('/inventory/all', async (req, res) => {
	try {
		let inventories = await inventoryController.getInventories(req);
		let code = inventories.statusCode;
		delete inventories.statusCode;
		res.status(code).send(inventories);
	} catch (error) {
		res.status(500).send({
			data: null,
			error: [{ msg: error.message }],
			message: 'Internal server error',
			status: 0,
		});
	}
});

router.post(
	'/inventory/add',
	[check('itemName', 'itemName field is required').notEmpty()],
	async (req, res) => {
		try {
			let inventory = await inventoryController.addInventory(req);
			let code = inventory.statusCode;
			delete inventory.statusCode;
			res.status(code).send(inventory);
		} catch (error) {
			res.status(500).send({
				data: null,
				error: [{ msg: error.message }],
				message: 'Internal server error',
				status: 0,
			});
		}
	}
);

router.post('/update/:id', async (req, res) => {
	try {
		let inventory = await inventoryController.updateInventory(req);
		let code = inventory.statusCode;
		delete inventory.statusCode;
		res.status(code).send(inventory);
	} catch (error) {
		res.status(500).send({
			data: null,
			error: [{ msg: error.message }],
			message: 'Internal server error',
			status: 0,
		});
	}
});

router.post('/delete/:id', async (req, res) => {
	try {
		let inventory = await inventoryController.deleteInventory(req);
		let code = inventory.statusCode;
		delete inventory.statusCode;
		res.status(code).send(inventory);
	} catch (error) {
		res.status(500).send({
			data: null,
			error: [{ msg: error.message }],
			message: 'Internal server error',
			status: 0,
		});
	}
});

module.exports = router;
