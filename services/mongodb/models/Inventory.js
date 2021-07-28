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
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Inventory', InventorySchema);
