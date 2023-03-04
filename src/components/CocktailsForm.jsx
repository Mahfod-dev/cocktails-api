export const CocktailsForm = ({ handleChange, cocktailName }) => {
	return (
		<div className='container text-center'>
			<div className='col'>
				<div className='row'>
					<label htmlFor='coktails'>Cocktail Name</label>
				</div>
				<input
					type='text'
					id='cocktail-input'
					name='coktailName'
					placeholder='Coktail'
					value={cocktailName}
					onChange={handleChange}
				/>
			
			</div>
		</div>
	);
};
