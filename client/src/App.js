import { useState } from 'react';
import { Inventory, Actions } from './components';

const App = () => {
	const [selected, setSelected] = useState([]);

	return (
		<div className='App'>
			<Actions />
			<Inventory selected={selected} setSelected={setSelected} />
		</div>
	);
};

export default App;
