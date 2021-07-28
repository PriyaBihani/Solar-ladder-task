const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema(
	{
		itemnName: {
			type: String,
			unique: true,
			required: true,
		},
		itemCode: {
			type: Number,
		},
		category: {
			type: String,
		},
		stockQuantity: {
			type: Number,
			default: 0,
		},
		stockOnHold: {
			type: Number,
			default: 0,
		},

		stockValue: {
			type: Number,
			default: 0,
		},
		purchasePrice: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Inventory', InventorySchema);
