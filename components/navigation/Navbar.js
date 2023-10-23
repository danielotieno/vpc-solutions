import Image from 'next/image';
import React from 'react';
import Logo from '../../public/img/logo.png';
import ActiveLink from '../../utils/ActiveLink';

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  });

  const classOne = menu
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show';
  const classTwo = menu
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right';

  return (
    <>
      <header className='header-area fixed-top'>
        <div className='nav-area four'>
          <div id='navbar' className='navbar-area'>
            <div className='main-nav'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <div className='container'>
                  <ActiveLink href='/'>
                    <a onClick={toggleNavbar} className='navbar-brand'>
                      <Image
                        src={Logo}
                        alt='VPC Solutions Logo'
                        width={120}
                        height={50}
                      />
                    </a>
                  </ActiveLink>

                  <button
                    onClick={toggleNavbar}
                    className={classTwo}
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='icon-bar top-bar'></span>
                    <span className='icon-bar middle-bar'></span>
                    <span className='icon-bar bottom-bar'></span>
                  </button>

                  <div className={classOne} id='navbarSupportedContent'>
                    <ul className='navbar-nav m-auto'>
                      <li className='nav-item'>
                        <ActiveLink href='/'>
                          <a onClick={toggleNavbar} className='nav-link'>
                            Home
                          </a>
                        </ActiveLink>
                      </li>

                      <li className='nav-item'>
                        <ActiveLink href='/about-us' activeClassName='active'>
                          <a onClick={toggleNavbar} className='nav-link'>
                            About
                          </a>
                        </ActiveLink>
                      </li>

                      <li className='nav-item'>
                        <ActiveLink href='/#'>
                          <a
                            onClick={(e) => e.preventDefault()}
                            className='nav-link'>
                            Services <i className='bx bx-plus'></i>
                          </a>
                        </ActiveLink>

                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <ActiveLink
                              href='/data-management'
                              activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Data Management
                              </a>
                            </ActiveLink>
                          </li>

                          <li className='nav-item'>
                            <ActiveLink
                              href='/business-intelligence'
                              activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Business Intelligence
                              </a>
                            </ActiveLink>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <ActiveLink href='/quality-policy' activeClassName='active'>
                          <a onClick={toggleNavbar} className='nav-link'>
                            Certification
                          </a>
                        </ActiveLink>
                      </li>
                    </ul>

                    <div className='others-option'>
                      <div className='subscribe'>
                        <ActiveLink href='/contact-us'>
                          <a className='default-btn'>Contact Us</a>
                        </ActiveLink>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
