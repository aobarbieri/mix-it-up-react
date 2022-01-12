/* This component provides a list of popular items which are used inside the Ingridients component 
- ingredient: prop list from data/ingredients.js */

import React, { useState } from 'react';

const PopularIngredients = ({ ingredient }) => {
	//useState to change the style of the button under Popular Ingredients when clicked
	const [ingredientSelected, setIngredientSelected] = useState(false);

	return (
		<button
			className={` ${
				ingredientSelected ? 'yellow' : 'inherit'
			} mr-2 mb-2 rounded-full py-1 px-2 border border-gray-300 text-gray-600`}
			onClick={() => setIngredientSelected(!ingredientSelected)}>
			{ingredient.name}
		</button>
	);
};

export default PopularIngredients;
