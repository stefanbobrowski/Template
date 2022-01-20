import { Link } from 'react-router-dom';
import './header.scss';

export const Header = () => {
  return (
    <header className='app-header'>
      <div className='header-nav container'>
        <Link to='/' className='header-logo'>
          <span>🕯️</span>
          <span>Template</span>
        </Link>
        <Link to='/about'>About</Link>
      </div>
    </header>
  );
};
