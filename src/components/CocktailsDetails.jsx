import { Link } from 'react-router-dom';


export const CocktailsDetails = ({ name, image, info, glass, id }) => {
	return (
		<div className='card' style={{ width: '18rem', margin: '50px' }}>
			<img className='card-img-top' src={image} alt='Card image cap' />
			<div className='card-body'>
				<h5 className='card-title'>{name}</h5>
				<p className='card-text'>
					{info} : {glass}
				</p>
				<Link to={`/${id}`} className='btn btn-primary'>
					Details
				</Link>
			</div>
		</div>
	);
};
