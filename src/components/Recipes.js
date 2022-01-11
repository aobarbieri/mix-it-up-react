import chevron from '../assets/icons/chevron.svg';
import cuba from '../assets/images/drinks/cuba.jpeg';
import greenUnderline from '../assets/icons/green-line.svg';
import cubaLibre from '../assets/images/cubaLibre.svg';

const Recipes = () => (
	<article className='bg-white w-full px-5'>
		<button className='font-medium my-5'>
			<img className='inline transform rotate-90 mb-0.5 mr-1' src={chevron} alt='chevron icon' />
			Back to Your Drinks
		</button>

		{/* Drink Description */}
		<header>
			<img
				className='float-left mr-4 rounded-lg object-cover w-24 h-24 md:w-52 md:h-52'
				src={cuba}
				alt='Drink Cuba Libre'
			/>
			<section>
				<h3 className='inline'>
					<img className='pt-3 md:pt-0 w-20 md:w-36' src={cubaLibre} alt='Drink title' />
					<img className='pt-1 pb-3 w-20 md:w-36' src={greenUnderline} alt='text decoration' />
				</h3>
				<p className='md:text-lg'>
					Rum and Coke is a classic combination that blends the tropical, grassy notes of the rum with the
					effervescent, spicy flavor of the cola. A squeeze of lime adds a zingy jolt of citrus that
					complements both ingredients while taming some of the sweetness. It also doesn’t hurt that the Cuba
					Libre contains caffeine and sugar, making it a preferred party drink, whether you’re celebrating
					your independence at a dive bar or a dance club.
				</p>
			</section>
		</header>

		<article className='mt-8 pb-16'>
			{/* Ingredients Section */}
			<section className='lg:float-left lg:mr-4 lg:w-52 '>
				<h4 className='font-medium text-2xl mb-4'>Ingredients</h4>
				<ul className='grid grid-flow-row gap-4 md:text-lg'>
					<li>1 Ounce Rum</li>
					<li>2 Ounces Cola</li>
					<li>Garnish: Lime wedge</li>
				</ul>
			</section>

			{/* Instructions Section */}
			<section className='mt-8 lg:mt-0'>
				<h4 className='font-medium text-2xl mb-4'>Instructions</h4>
				<ol className='grid grid-flow-row gap-4 md:text-lg'>
					<li>1. Fill a highball glass with ice, then add rum and Cola.</li>
					<li>2. Garnish with lime wedge. Squeeze lime into drink if desired.</li>
				</ol>
			</section>
			<div className='clear-both'></div>
		</article>

		{/* Carousel to be added with drinks suggestions */}
	</article>
);

export default Recipes;
