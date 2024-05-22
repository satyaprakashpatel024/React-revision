import './App.css';
import { useState } from 'react';

function App() {
	const [counter, setCounter] = useState(0);
	const Increment = () => {
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
		setCounter((prevCounter) => prevCounter + 1);
	};
	const Decrement = () => {
		if (counter == 0) {
			setCounter(counter);
			window.alert('cann"t be less than 0');
		} else {
			setCounter(counter - 1);
		}
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
