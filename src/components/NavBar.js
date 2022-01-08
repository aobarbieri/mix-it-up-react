import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import menu from '../assets/menu.svg';
import menuClose from '../assets/xmark.svg';
import search from '../assets/search.svg';

const NavBar = () => {
	// useState Hook to add functionality to the hamburger menu on mobile devices
	const [menuOpen, setMenuOpen] = useState(false);
	const handleToggle = () => {
		setMenuOpen((prev) => !prev);
	};
	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<nav className='font-rob'>
			{/* Nav Mobile */}
			<section className='grid grid-cols-7 lg:hidden p-4 '>
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
				<img className='col-span-5 justify-self-center w-24' src={logo} alt='mix-it-up logo' />
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
			<section className='hidden lg:grid grid-cols-5 items-center my-0 mx-auto max-w-4xl h-20'>
				<img className='col-span-3 justify-self-start w-40 h-16' src={logo} alt='mix-it-up logo' />
				<article className='col-span-2 justify-self-end'>
					<ul className='grid grid-cols-2 gap-8 uppercase'>
						<li>
							<a href='#recipes'>Drink Recipes</a>
						</li>
						<li>
							<a href='#login'>Login/Sign Up</a>
						</li>
					</ul>
				</article>
			</section>
		</nav>
	);
};

export default NavBar;
