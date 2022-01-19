import { Link } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h2>Page Not Found</h2>
      </div>
      <div className='container'>
        <p>
          This page does not exist. <Link to='/'>Go to the home page</Link>
        </p>
      </div>
    </div>
  );
};
