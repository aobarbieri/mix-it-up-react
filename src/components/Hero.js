import './Hero.scss';
import Ingredients from './Ingredients';
import Drinks from './Drinks';
import Recipes from './Recipes';

const Hero = () => (
	<main className='bg_image font-rob'>
		{/* main page */}
		<article className='hidden w-11/12 lg:max-w-4xl my-0 mx-auto pb-20 text-sm'>
			{/* Make A Drink Header */}
			<header className='text-white'>
				<h1 className='uppercase text-4xl lg:text-6xl text-center md:text-left py-3 md:pt-10'>Make a Drink</h1>
				<p className='px-3 md:px-0 pb-3 lg:pb-5 text-base lg:text-lg'>
					Select which ingredients you have, and we'll show you all the different cocktails you can create.
				</p>
			</header>

			<section className='md:flex '>
				{/* Your Ingredients Section */}
				<Ingredients />

				{/* Drinks You Can Make Section */}
				<Drinks />
			</section>
		</article>

		{/* recipes page */}
		<article className='w-11/12 lg:max-w-4xl my-0 mx-auto pb-20 pt-4'>
			<Recipes />
		</article>
	</main>
);

export default Hero;
