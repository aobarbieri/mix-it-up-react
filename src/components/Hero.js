import React from 'react';

import background from '../assets/background.png';

import './Hero.scss';

const Hero = () => (
	<header className='hero__container'>
		<img className='bg-cover' src={background} alt='' />
	</header>
);

export default Hero;
