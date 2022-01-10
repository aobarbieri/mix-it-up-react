import ingredients from '../assets/ingredients.svg';
import yellowLine from '../assets/yellow-line.svg';
import removebtn from '../assets/xmark.svg';
import searchIcon from '../assets/search-gray.svg';

const Ingredients = () => (
	<article className='bg-white w-full px-5'>
		{/* Your Ingredients Section */}
		<section className='pt-10 pb-11 w-64 h-16 flex flex-col mx-auto'>
			<img src={ingredients} alt='Your Ingredients' />
			<img src={yellowLine} alt='Yellow Underline Decoration' />
		</section>

		{/* Selected Ingredients */}
		<section className='flex flex-col bg-gray-50 h-32 my-4'>
			<section className='flex flex-wrap'>
				<button className='bg-gray-200 mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					Simple Syrup <img className='inline ml-1 w-3' src={removebtn} alt='remove button' />
				</button>
			</section>
			<p className='text-gray-400 flex-grow place-self-center'>No Ingredients Selected</p>
		</section>

		{/* Search Ingredients */}
		<section>
			<h4 className='font-medium mb-1'>Search Ingredients</h4>
			<div className='relative'>
				<input className='bg-gray-50 border border-gray-300 w-full h-9' type='text'></input>
				<button className='absolute right-0 mr-3'>
					<img className='mt-2' src={searchIcon} alt='search icon' />
				</button>
			</div>
		</section>

		{/* Popular ingredients */}
		<section className='pb-32'>
			<h4 className='font-medium mt-9 mb-1'>Popular Ingredients</h4>
			<section className='flex flex-wrap'>
				<button className='bg-yellow-300 mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					Simple Syrup
				</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>Lime</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>Lemon</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>Gin</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>Vodka</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					White Rum
				</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					Angostura Bitters
				</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					Orange Juice
				</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					Tequila
				</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
					Whiskey
				</button>
				<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>Cola</button>
			</section>
		</section>
	</article>
);

export default Ingredients;
