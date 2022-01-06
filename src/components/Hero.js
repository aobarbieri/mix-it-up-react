import background from '../assets/background.png';

import './Hero.scss';

const Hero = () => (
	<header className='max-w-screen max-h-screen'>
		<img className='w-full bg-cover' src={background} alt='' />
	</header>
);

export default Hero;
