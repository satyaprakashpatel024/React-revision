/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

	const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});
        setUsername('');
        setPassword('');
    };
	return (
		<div className='flex flex-col justify-center items-center'>
			<h2>Login</h2>
			<input className='border inline ' type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
			<input className='border inline' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
			<button onClick={handleSubmit}>Submit</button>
		</div>
	);
}

export default Login;
