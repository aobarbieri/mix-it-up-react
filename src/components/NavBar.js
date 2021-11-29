import React from 'react';

import logo from '../assets/logo.png';

const NavBar = () => (
	<nav className='bg-gray-50 grid grid-cols-2 items-center'>
		<img className='justify-self-start ml-10 lg:ml-56' src={logo} alt='' />
		<ul className='lg:grid grid-cols-2 gap-8 justify-self-end mr-10 lg:mr-56 font-rob uppercase text-sm md:text-base'>
			<li>
				<a href='#recipes'>Drink Recipes</a>
			</li>
			<li>
				<a href='#login'>Login/Sign Up</a>
			</li>
		</ul>
	</nav>
);

export default NavBar;
