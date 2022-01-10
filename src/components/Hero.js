import './Hero.scss';
import Ingredients from './Ingredients';
import Drinks from './Drinks';

const Hero = () => (
	<main className='bg_image font-rob'>
		<article className='w-11/12 lg:max-w-4xl my-0 mx-auto pb-20 text-sm'>
			{/* Make A Drink Header */}
			<header className='text-white text-base'>
				<h1 className='uppercase text-4xl lg:text-6xl text-center py-3'>Make a Drink</h1>
				<p className='px-3 pb-3'>
					Select which ingredients you have, and we'll show you all the different cocktails you can create.
				</p>
			</header>

			{/* Your Ingredients Section */}
			<Ingredients />

			{/* Drinks Your Can Make Section */}
			<Drinks />
		</article>
	</main>
);

export default Hero;
