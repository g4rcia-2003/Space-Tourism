import { useState } from 'react';
import './navbar.scss';

export const NavBar = () => {

  const [menu, setMenu] = useState(false);
  console.log(menu)

  return (
  <header className="header">
    
    {/* Logo Pagina Web */}
    <div className="header__logo"></div>
    
    <div className='header__line'></div>

    {/* Logo menu hamburger */}
    <div className='header__menu'>
        {
          menu ? 
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" onClick={() => setMenu(false)}>
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/>
            </g>
          </svg>
          : 
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" onClick={() => setMenu(true)}>
            <g fill="#D0D6F9" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
            </g>
          </svg> 
        }
    </div>
    
    <nav className="header__nav">
      <ul className={`header__ul ${ menu && 'header__ul--active'}`}>
        {/* Home */}
        <li className="header__li">
          <span className="header__num">00</span>
          <p className="header__texto">Home</p>
        </li>
        {/* Destination */}
        <li className="header__li">
          <span className="header__num">01</span>
          <p className="header__texto">Destination</p>
        </li>
        {/* Crew */}
        <li className="header__li">
          <span className="header__num">02</span>
          <p className="header__texto">Crew</p>
        </li>
        {/* Technology */}
        <li className="header__li">
          <span className="header__num">03</span>
          <p className="header__texto">Technology</p>
        </li>
      </ul>
    </nav>
    
  </header>
  )
}