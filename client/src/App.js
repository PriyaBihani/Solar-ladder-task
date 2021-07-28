import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inventory, Actions } from './components';

const App = () => {
	const [selected, setSelected] = useState([]);
	const [showLowStock, setShowLowStock] = useState(false);
	const [inventories, setInventories] = useState([]);

	const getAllInventories = async () => {
		const response = await axios.get('/api/inventory/all');
		setInventories(response.data.data.inventories);
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
