export async function fetchCocktails(name) {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;

	const response = await fetch(url);

	const data = await response.json();

	const { drinks } = data;

	localStorage.setItem('cocktail',JSON.stringify(drinks))

	if (drinks) {
		const newCocktails = drinks.map((item) => {
			const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

			return {
				id: idDrink,
				name: strDrink,
				image: strDrinkThumb,
				info: strAlcoholic,
				glass: strGlass,
			};
		});
		return newCocktails;
	}
}
