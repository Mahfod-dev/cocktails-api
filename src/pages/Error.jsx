import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<>
			Sorry, but this page is empty
			<Link to='/' className='btn btn-primary'>
				Go Home
			</Link>
		</>
	);
};
export default Error;
