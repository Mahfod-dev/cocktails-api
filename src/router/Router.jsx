import {
	BrowserRouter as Router,
	Routes,
	Route,
	BrowserRouter,
} from 'react-router-dom';
import CocktailApp from '../CocktailApp';
import { Navbar } from '../UI';
import Error from '../pages/Error';
import { CocktailDetail } from '../pages';



const RouterApp = () => {
	return (
		<>
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CocktailApp />} />
					<Route path='/:cocktailId' element={<CocktailDetail/>}/>
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default RouterApp;
