import './App.css';
import Card from './components/Card';

function App() {

	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='bg-green-400 text-black p-4 rounded-md mb-4 text-4xl'>Tailwind test</h1>
			<Card username='satya' btnText='visit me' />
			<Card username='lucky' btnText='visit me'/>
		</div>
	);
}

export default App;
