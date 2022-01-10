import drinks from '../assets/images/drinksYouCanMake-logo.svg';
import pinkLine from '../assets/icons/pink-line.svg';
import chevron from '../assets/icons/chevron.svg';
import cubalibre from '../assets/images/drinks/cuba.svg';
import gintonic from '../assets/images/drinks/gin-tonic.svg';

const Drinks = () => (
	<article className='bg-gray-50 w-full md:w-7/12 md:px-2 lg:px-7'>
		{/* Drinks You Can Make Section */}
		<section className='pt-10 pb-11 w-72 h-16 flex flex-col mx-auto'>
			<img className='' src={drinks} alt='Your Ingredients' />
			<img className='' src={pinkLine} alt='Yellow Underline Decoration' />
		</section>

		{/* No Drinks Available once no ingredients are selected or there is no match */}
		<section className='hidden mx-14 pb-40'>
			<p className='text-gray-400 text-center mt-12'>No Drinks Available from Your Selected Ingredients</p>
		</section>

		{/* Drinks Available List showing drinks you can make once ingredients are selected */}
		<section className='mt-6 pb-40'>
			<table className='bg-white w-full'>
				{/* Table head */}
				<thead>
					<tr className='border'>
						<th className='w-1/2 font-medium text-left pl-5 py-4'>
							Name <img className='inline pl-1 pb-1' src={chevron} alt='chevron drop down' />
						</th>
						<th className='font-medium text-right'>Ingredients</th>
						<th className='w-1/4 font-medium text-right pr-5'>Time to Make</th>
					</tr>
				</thead>
				{/* Table body */}
				<tbody className='divide-y border'>
					<tr>
						<td className='text-left pl-5 font-medium'>
							<img className='inline my-2 pr-1' src={cubalibre} alt='drink preview' />
							Cuba Libre
						</td>
						<td className='text-right'>3</td>
						<td className='text-right pr-5'>2 min</td>
					</tr>
					<tr>
						<td className='text-left pl-5 font-medium'>
							<img className='inline my-2 pr-1' src={gintonic} alt='drink preview' />
							Gin & Tonic
						</td>
						<td className='text-right'>2</td>
						<td className='text-right pr-5'>2 min</td>
					</tr>
				</tbody>
			</table>
		</section>
	</article>
);

export default Drinks;
