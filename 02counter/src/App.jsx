import './App.css';
import { useState } from 'react';

function App() {
	let [counter, setCounter] = useState(0);
	const Increment = () => {
		setCounter(counter+1);
		console.log('Increment : ', counter);
	};
	const Decrement = () => {
		setCounter(counter-1);
		console.log('Decrement : ', counter);
	};

	return (
		<>
			<h1>Counter project</h1>
			<h2>Counter Value : {counter}</h2>
			<button onClick={Increment}>Increment</button>
			<br />
			<button onClick={Decrement}>Decrement</button>
		</>
	);
}

export default App;
