import { useCallback, useEffect, useReducer, useRef, useLayoutEffect } from 'react';
import { fetchCocktails } from '../api/fetchCocktails';
import { CocktailsDetails } from '../components';
import { asyncReducer } from '../helpers/Reducer/asyncReducer';



function useSafeDispatch(dispatch){

	const mountedRef = useRef(false)


	useLayoutEffect(()=>{
		mountedRef.current = true

		return ()=> mountedRef.current = false
	},[])

	return useCallback((...args)=>{mountedRef.current ? dispatch(...args) : void 0},[dispatch])

}


function useAsync(initialState) {
	const [state, unsafeDispatch] = useReducer(asyncReducer, {
		status: 'idle',
		data: null,
		error: null,
		...initialState,
	});

	const dispatch = useSafeDispatch(unsafeDispatch)

	const { data, error, status } = state;

	const run = useCallback((promise) => {
		dispatch({ type: 'pending' });

		promise.then(
			(data) => {
				dispatch({ type: 'resolved', data });
			},
			(error) => {
				dispatch({ type: 'rejected', error });
			}
		);
	}, [dispatch]);

	return { error, status, data, run };
}

export const CocktailsView = ({ cocktailName }) => {
	const {
		data: cocktailsData,
		status,
		error,
		run,
	} = useAsync({ status: cocktailName ? 'pending' : 'idle' });



useEffect(() => {
		
		run(fetchCocktails(cocktailName));
	}, [cocktailName, run]);

	switch (status) {
		case 'idle':
			return <span>Please enter a cocktail</span>;
		case 'pending':
			return <h1>Loading</h1>;
		case 'rejected':
			return   <h1>{error}</h1>;
		case 'resolved':
			return (
				<>
					
					
					<div className='container-fluid row'>
						{cocktailsData?.map((cocktail) => (
							<CocktailsDetails key={cocktail.id} {...cocktail} />
						))}
					</div>

						
				</>
			);

		
		default:
			throw new Error('This should be impossible');
	}
};
