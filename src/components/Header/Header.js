import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header className='app-header'>
      <div className='header-nav container'>
        <Link to='/'>🌀 Template</Link>
        <Link to='/about'>About</Link>
      </div>
    </header>
  );
}

export default Header;
