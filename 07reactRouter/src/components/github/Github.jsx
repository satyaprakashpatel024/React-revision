/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData();
	// const [data, setData] = useState({});
	// useEffect(() => {
	// 	fetch('https://api.github.com/users/satyaprakashpatel024')
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setData(data);
	// 			console.log(data);
	// 		});
	// }, []);
	return (
		<>
			<div className='text-center m-4 bg-gray-400 text-black p-4 text-3xl'>
				Github Followers : {data.followers}
				<img src={data.avatar_url} className='text-center' alt='img' />
			</div>
		</>
	);
}

export default Github;

export const githubInfo = async () => {
	const res = await fetch('https://api.github.com/users/satyaprakashpatel024');
    let data = res.json();
    console.log(data);
	return data;
}
