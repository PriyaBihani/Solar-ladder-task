import { useState, useEffect } from 'react';
import axios from 'axios';
import { Inventory, Actions } from './components';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [selected, setSelected] = useState([]);
	const [showLowStock, setShowLowStock] = useState(false);
	const [inventories, setInventories] = useState([]);
	const [data, setData] = useState();

	const getAllInventories = async () => {
		const response = await axios.get('/api/inventory/all');
		setInventories(response.data.data.inventories);
	};

	useEffect(() => {
		getAllInventories();
	}, [data]);

	return (
		<div className='App'>
			<ToastContainer />
			<Actions
				setData={setData}
				setShowLowStock={setShowLowStock}
				showLowStock={showLowStock}
				selected={selected}
			/>
			<Inventory
				setData={setData}
				selected={selected}
				setSelected={setSelected}
				data={
					showLowStock
						? inventories.filter(
								(item) => item.stockQuantity <= item.lowQuantity
						  )
						: inventories
				}
			/>
		</div>
	);
};

export default App;
