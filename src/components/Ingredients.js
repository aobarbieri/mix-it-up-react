import ingredients from '../assets/images/yourIngredients-logo.svg';
import yellowLine from '../assets/icons/yellow-line.svg';
import removebtn from '../assets/icons/xmark.svg';
import searchIcon from '../assets/icons/search-gray.svg';

import PopularIngredients from './PopularIngredients';
import ingredientsList from '../data/ingredients';
import './Ingredients.scss';

const Ingredients = () => {
	// ingredient prop from the array of ingredients
	const item = ingredientsList.map((ingredient) => (
		<PopularIngredients key={ingredient.id} ingredient={ingredient} />
	));

	return (
		<article className='bg-white w-full md:w-5/12 px-5 lg:px-10'>
			{/* Your Ingredients Header Section */}
			<section className='pt-10 pb-11 w-64 h-16 flex flex-col mx-auto'>
				<img src={ingredients} alt='Your Ingredients' />
				<img src={yellowLine} alt='Yellow Underline Decoration' />
			</section>

			{/* Selected Ingredients */}
			<section className='flex flex-col h-32 my-4'>
				<section className='flex flex-wrap'>
					<button className='bg-gray-200 mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600'>
						Simple Syrup <img className='inline ml-1 w-3' src={removebtn} alt='remove button' />
					</button>
				</section>
				<p className='hidden pt-14 text-gray-400 place-self-center'>No Ingredients Selected</p>
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
				<section className='flex flex-wrap'>{item}</section>
			</section>
		</article>
	);
};

export default Ingredients;
