export function getCocktailById(id,cocktail){

  const newCocktail = [...cocktail]

return  newCocktail.find(cocktail => cocktail.idDrink
 === id)
}