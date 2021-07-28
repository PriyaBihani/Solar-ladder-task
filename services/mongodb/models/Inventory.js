const mongoose = require('mongoose');

const InventorySchema = mongoose.Schema(
	{
		itemName: {
			type: String,
			unique: true,
			required: true,
		},
		itemCode: {
			type: Number,
			required: true,
		},
		category: {
			type: String,
		},
		stockQuantity: {
			type: Number,
			default: 0,
			required: true,
		},
		stockOnHold: {
			type: Number,
			default: 0,
		},
		description: {
			type: String,
			required: true,
		},
		unit: {
			type: String,
			required: true,
		},
		stockValue: {
			type: Number,
			default: 0,
		},
		purchasePrice: {
			type: Number,
			default: 0,
			required: true,
		},
		lowQuantity: {
			type: Number,
			required: true,
		},
		gst: {
			type: Number,
			required: true,
		},
		unit: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Inventory', InventorySchema);
