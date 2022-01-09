import ingredients from '../assets/ingredients.svg';
import yellowLine from '../assets/yellow-line.svg';

import searchIcon from '../assets/search-gray.svg';

const MakeCocktail = () => (
	<main className='w-11/12 lg:max-w-4xl my-0 mx-auto text-sm'>
		{/* Make A Drink Header */}
		<section className='text-white'>
			<h1 className='uppercase text-4xl lg:text-6xl text-center py-3'>Make a Drink</h1>
			<p className='px-3 pb-3'>
				Select which ingredients you have, and we'll show you all the different cocktails you can create.
			</p>
		</section>

		{/* Your Ingredients Container */}
		<section>
			<article className='bg-white w-full px-5'>
				{/* Your Ingredients Header */}
				<section className='py-10 w-60 h-16 flex flex-col mx-auto'>
					<img className='' src={ingredients} alt='Your Ingredients' />
					<img className='' src={yellowLine} alt='Yellow Underline Decoration' />
				</section>

				{/* Selected Ingredients */}
				<section className='flex flex-col place-content-center bg-gray-50 h-32 my-4'>
					<p className='text-gray-400 place-self-center'>No Ingredients Selected</p>
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
						<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
							Simple Syrup
						</button>
						<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
							Lime
						</button>
						<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
							Lemon
						</button>
						<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
							Gin
						</button>
						<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
							Vodka
						</button>
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
						<button className='mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
							Cola
						</button>
					</section>
				</section>
			</article>
		</section>
	</main>
);

export default MakeCocktail;
