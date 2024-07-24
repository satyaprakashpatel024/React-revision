/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
	const [length, setLength] = useState(7);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [characterAllowed, setCharacterAllowed] = useState(false);
	const [password, setPassword] = useState('');
	let ref = useRef(null);
	const passwordGenerator = useCallback(() => {
		let pass = '';
		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		if (numberAllowed) str += '0123456789';
		if (characterAllowed) str += '!@#$%^&*()_-+=[]{}~`';
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, characterAllowed, numberAllowed, setPassword]);
	const copyPassword = useCallback(() => {
		// using useRef hook
		ref.current?.select();
		ref.current?.setSelectionRange(0, 99);
		window.navigator.clipboard.writeText(password);
		alert('password copied');
	}, [password]);
	useEffect(() => {
		passwordGenerator();
	}, [length, characterAllowed, numberAllowed, passwordGenerator]);
	return (
		<div>
			<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 bg-gray-700'>
				<h1 className='text-center text-4xl text-white mb-3 my-3'>Password Generator</h1>
				<div className='flex shadow rounded-lg overflow-hidden mb-4'>
					<input type='text' value={password} className='outline-none w-full py-1 px-3 ' placeholder='password' ref={ref} readOnly />
					<button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
						Copy
					</button>
				</div>
				<div className='flex text-lg gap-x-2'>
					<div className='flex items-center gap-x-1'>
						<input type='range' min={10} max={50} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
						<label htmlFor=''>Length:{length}</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input type='checkbox' id='numberInput' defaultChecked={numberAllowed} onChange={(e) => setNumberAllowed(!numberAllowed)} className='cursor-pointer' />
						<label>Numbers</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input type='checkbox' id='characterInput' defaultChecked={characterAllowed} onChange={(e) => setCharacterAllowed(!characterAllowed)} className='cursor-pointer' />
						<label>Characters</label>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
