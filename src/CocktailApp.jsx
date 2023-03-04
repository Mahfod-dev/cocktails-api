import * as React from 'react';
import { CocktailsForm } from './components';
import { CocktailsView } from './pages';

const CocktailApp = () => {
	const [cocktailName, setCocktailName] = React.useState('');

	const handleChange = (e) => {
		setCocktailName(e.target.value);
	};

	return (
		<>
			<CocktailsForm handleChange={handleChange} value={cocktailName} />
			<CocktailsView cocktailName={cocktailName} />
		</>
	);
};

export default CocktailApp;
