import './Hero.scss';
import MakeCocktail from './MakeCocktail';

const Hero = () => (
	<header className='relative bg_image'>
		<article className='absolute h-full w-full bg-black opacity-70 font-rob'>
			<MakeCocktail />
		</article>
	</header>
);

export default Hero;
