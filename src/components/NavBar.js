import React, { useState } from 'react';

import logo from '../assets/logo.png';
import menu from '../assets/menu.png';
import menuClose from '../assets/menuClose.png';
import search from '../assets/search.png';

const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const handleToggle = () => {
		setMenuOpen((prev) => !prev);
	};
	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<nav className='bg-gray-50'>
			{/* Nav Mobile */}
			<section className='grid grid-cols-3 p-4 '>
				<button onClick={handleToggle}>
					{menuOpen ? (
						<img
							className='menu-btn cursor-pointer self-center lg:hidden'
							src={menuClose}
							alt='hamburger menu icon'
						/>
					) : (
						<img
							className='menu-btn cursor-pointer self-center lg:hidden'
							src={menu}
							alt='hamburger menu icon'
						/>
					)}
				</button>
				<img className='justify-self-center' src={logo} alt='mix-it-up logo' />
				<img className='cursor-pointer justify-self-end self-center' src={search} alt='search icon' />
			</section>

			{/* Nav Mobile - Hamburger Menu */}
			<section
				className={`${
					menuOpen ? 'block' : 'hidden'
				} absolute z-10 h-screen w-screen lg:hidden bg-black opacity-95 `}>
				<ul
					className=' text-white uppercase text-sm leading-6 tracking-wider divide-y p-10 md:px-56 text-center'
					onClick={() => closeMenu()}>
					<li className='pb-4 text-yellow-300'>Drink Calculator</li>
					<li className='py-4'>Recipes</li>
					<li className='py-4'>Definitions</li>
					<li className='pt-4'>Login/Signup</li>
				</ul>
			</section>

			{/* Nav Desktop */}
			<section className='hidden lg:grid lg:grid-cols-2 '>
				<ul className='grid grid-cols-2 gap-8 justify-self-end mr-10 lg:mr-56 font-rob uppercase'>
					<li>
						<a href='#recipes'>Drink Recipes</a>
					</li>
					<li>
						<a href='#login'>Login/Sign Up</a>
					</li>
				</ul>
			</section>
		</nav>
	);
};

export default NavBar;
