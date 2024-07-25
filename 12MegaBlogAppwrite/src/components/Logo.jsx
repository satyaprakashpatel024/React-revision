/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../assets/techbytes.png'
function Logo({ width = '100px' }) {
	return <img src={logo} width={width}/>;
}

export default Logo;
