import Image from 'next/image';
import React from 'react';
import Logo from '../../public/img/logo.png';
import Link from '../../utils/ActiveLink';
import TopNavbar from './TopNavbar';

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
        <TopNavbar />

        <div className='nav-area'>
          <div id='navbar' className='navbar-area'>
            <div className='main-nav'>
              <nav className='navbar navbar-expand-md navbar-light'>
                <div className='container'>
                  <Link href='/' passHref>
                    <a onClick={toggleNavbar} className='navbar-brand'>
                      <Image
                        src={Logo}
                        alt='VPC Solutions Logo'
                        width={120}
                        height={50}
                      />
                    </a>
                  </Link>

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
                        <Link href='/#' activeClassName='active'>
                          <a
                            onClick={(e) => e.preventDefault()}
                            className='nav-link'>
                            Home <i className='bx bx-plus'></i>
                          </a>
                        </Link>

                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/' activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Home 1 (Emergency Medical Clinic)
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <Link href='/about' activeClassName='active'>
                          <a onClick={toggleNavbar} className='nav-link'>
                            About
                          </a>
                        </Link>
                      </li>

                      <li className='nav-item'>
                        <Link href='/#'>
                          <a
                            onClick={(e) => e.preventDefault()}
                            className='nav-link'>
                            Pages <i className='bx bx-plus'></i>
                          </a>
                        </Link>

                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/#'>
                              <a
                                onClick={(e) => e.preventDefault()}
                                className='nav-link'>
                                User <i className='bx bx-plus'></i>
                              </a>
                            </Link>

                            <ul className='dropdown-menu'>
                              <li className='nav-item'>
                                <Link href='/sign-in' activeClassName='active'>
                                  <a
                                    onClick={toggleNavbar}
                                    className='nav-link'>
                                    Sign In
                                  </a>
                                </Link>
                              </li>

                              <li className='nav-item'>
                                <Link href='/sign-up' activeClassName='active'>
                                  <a
                                    onClick={toggleNavbar}
                                    className='nav-link'>
                                    Sign Up
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </li>

                          <li className='nav-item'>
                            <Link href='/coming-soon' activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Coming Soon
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/404' activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                404 Error Page
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <Link href='/#'>
                          <a
                            onClick={(e) => e.preventDefault()}
                            className='nav-link'>
                            Services <i className='bx bx-plus'></i>
                          </a>
                        </Link>

                        <ul className='dropdown-menu'>
                          <li className='nav-item'>
                            <Link href='/services-1' activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Services Style One
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/services-2' activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Services Style Two
                              </a>
                            </Link>
                          </li>

                          <li className='nav-item'>
                            <Link href='/services-3' activeClassName='active'>
                              <a onClick={toggleNavbar} className='nav-link'>
                                Services Style Three
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className='nav-item'>
                        <Link href='/contact' activeClassName='active'>
                          <a onClick={toggleNavbar} className='nav-link'>
                            Contact
                          </a>
                        </Link>
                      </li>
                    </ul>

                    <div className='others-option'>
                      <div className='subscribe'>
                        <Link href='/#'>
                          <a className='default-btn'>Get In Touch</a>
                        </Link>
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
