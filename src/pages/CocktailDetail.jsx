import { useMemo } from "react"
import { useParams } from "react-router-dom"
import {getCocktailById} from '../utils/getCocktailById'
import { Link } from "react-router-dom"

export const CocktailDetail = () => {

  const getItems =JSON.parse(localStorage.getItem('cocktail'))

const {cocktailId} = useParams()


const cocktail = useMemo(()=>{return getCocktailById(cocktailId,getItems)},[cocktailId]) 

  const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
         } = cocktail

  return (
    	<div className='card' style={{ width: '18rem', margin: '50px' }}>
			<img className='card-img-top' src={image} alt='Card image cap' />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>
					{info} : {glass}
				</p>

      <p>
        {instructions}
      </p>

				<Link to={`/`} className='btn btn-primary'>
				Back to home
				</Link>
			</div>
		</div>
  )
}