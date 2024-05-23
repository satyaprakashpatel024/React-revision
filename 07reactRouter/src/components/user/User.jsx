/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

function user() {
	const { userid } = useParams();
	return (
		<div>
			<h1 className='bg-gray-500 p-4 text-center text-3xl '>User :{userid}</h1>
		</div>
	);
}

export default user;
