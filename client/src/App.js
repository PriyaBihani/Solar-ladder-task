import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inventory, Actions } from './components';

// const data = [
// 	{
// 		id: 1,
// 		itemName: 'dljf',
// 		itemCode: 687,
// 		category: 'dfa',
// 		stockQuantity: 34,
// 		stockOnHold: 0,
// 		stockValue: 43,
// 		price: 342,
// 		lowStockUnits: 1,
// 	},
// 	{
// 		id: 2,
// 		itemName: 'asfd',
// 		itemCode: 863,
// 		category: 'dfa',
// 		stockQuantity: 34,
// 		stockOnHold: 0,
// 		stockValue: 43,
// 		price: 342,
// 		lowStockUnits: 1,
// 	},
// 	{
// 		id: 3,
// 		itemName: 'asfd',
// 		itemCode: 863,
// 		category: 'dfa',
// 		stockQuantity: 3,
// 		stockOnHold: 0,
// 		stockValue: 43,
// 		price: 342,
// 		lowStockUnits: 3,
// 	},
// ];

const App = () => {
	const [selected, setSelected] = useState([]);
	const [showLowStock, setShowLowStock] = useState(false);
	const [inventories, setInventories] = useState();

	const getAllInventories = async () => {
		const response = await axios.get('/api/inventory/all');
		setInventories(response.data);
	};

	useEffect(() => {
		getAllInventories();
	}, []);

	return (
		<div className='App'>
			<Actions
				setShowLowStock={setShowLowStock}
				showLowStock={showLowStock}
				selected={selected}
			/>
			<Inventory
				selected={selected}
				setSelected={setSelected}
				data={
					showLowStock
						? inventories.filter(
								(item) => item.stockQuantity <= item.lowStockUnits
						  )
						: inventories
				}
			/>
		</div>
	);
};

export default App;
