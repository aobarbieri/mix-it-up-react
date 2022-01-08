import ingredients from '../assets/ingredients.svg';
import yellowLine from '../assets/yellow-line.svg';

const MakeCocktail = () => (
	<main className='w-11/12 lg:max-w-4xl my-0 mx-auto '>
		{/* Make A Drink Header */}
		<section className='text-white'>
			<h1 className='uppercase text-4xl lg:text-6xl text-center py-3'>Make a Drink</h1>
			<p className='px-3 pb-3'>
				Select which ingredients you have, and we'll show you all the different cocktails you can create.
			</p>
		</section>

		{/* Your Ingredients Container */}
		<section>
			<article className='bg-white w-full'>
				{/* Your Ingredients Header */}
				<section className='py-10 w-60 h-16 flex flex-col mx-auto'>
					<img className='' src={ingredients} alt='Your Ingredients' />
					<img className='' src={yellowLine} alt='Yellow Underline Decoration' />
				</section>

				{/* Selected Ingredients */}
				<section>
					<p>No Ingredients Selected</p>
				</section>

				{/* Search Ingredients */}
				<section>
					<h4>Search Ingredients</h4>
					<input type='text' size='10'></input>
					<button>search icon</button>
				</section>

				{/* Popular ingredients */}
				<section>
					<h4>Popular Ingredients</h4>
					<section>
						<button>Simple Syrup</button>
						<button>Lime</button>
						<button>Lemon</button>
						<button>Gin</button>
						<button>Vodka</button>
						<button>White Rum</button>
						<button>Angostura Bitters</button>
						<button>Orange Juice</button>
						<button>Tequila</button>
						<button>Whiskey</button>
						<button>Cola</button>
					</section>
				</section>
			</article>
		</section>
	</main>
);

export default MakeCocktail;
