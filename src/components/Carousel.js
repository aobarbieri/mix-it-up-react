import manhattan from '../assets/images/drinks/manhattan.svg';
import clock from '../assets/icons/clock.svg';
import daiquiri from '../assets/images/drinks/daiquiri.svg';

const Carousel = () => (
	<section className='bg-gray-50 px-5 pb-9 border-t'>
		{/* You May Also Like Section */}
		<h5 className='mt-6 text-xl'>You May Also Like</h5>
		<article className='my-3 flex bg-white h-24 w-64 filter drop-shadow-lg'>
			<img className='mr-3 w-24' src={manhattan} alt='Cocktail preview' />
			<section className='text-sm w-40 '>
				<h6 className='font-bold tracking-wider mt-3'>Manhattan</h6>
				<p className='my-1 text-gray-700'>
					Ingredients: <span>4</span>
				</p>
				<p className='text-gray-700'>
					<img className='inline md:mb-1 mr-1' src={clock} alt='clock icon' />
					<span>4</span> min
				</p>
			</section>
		</article>

		{/* More x type of drinks Section */}
		<h5 className='mt-6 text-xl'>More Rum Drinks</h5>
		<article className='my-3 flex bg-white h-24 w-64 filter drop-shadow-lg'>
			<img className='mr-3 w-24' src={daiquiri} alt='Cocktail preview' />
			<section className='text-sm w-40'>
				<h6 className='font-bold tracking-wider mt-3'>Daiquiri</h6>
				<p className='my-1'>
					Ingredients: <span>4</span>
				</p>
				<p>
					<img className='inline md:mb-1 mr-1' src={clock} alt='clock icon' />
					<span className='hidden lg:inline'>Time to Make:</span> <span>4</span> min
				</p>
			</section>
		</article>
	</section>
);

export default Carousel;
