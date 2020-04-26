import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
class NavbarMainmenu extends Component {
    state = {}
    render() {
        return (
            <div className="col-lg-9 col-12">
                <div className="menu-area">
                    {/* Main Menu */}
                    <nav className="navbar navbar-expand-lg">
                        <div className="navbar-collapse">
                            <div className="nav-inner">

                                <ul className="nav main-menu menu navbar-nav">
                                    <li className="active"><NavLink to="/blog">>> CATEGORIES <i className="ti-angle-down" /></NavLink>
                                        <ul className="dropdown  main-category">
                                            <li ><Link to="/arrivals"> New Arrivals <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                                <ul className="sub-category" >
                                                    <li><Link to="" style={{ backgroundColor: '#fff' }} >man’s product</Link></li>
                                                    <li><Link to="" style={{ backgroundColor: '#fff' }} >westrn dress</Link></li>
                                                </ul>
                                            </li>
                                            <li className="main-mega"><Link to="">best selling <i className="fa fa-angle-right" aria-hidden="true" /></Link>
                                                <ul className="mega-menu">
                                                    <li className="single-menu">
                                                        <Link to="" className="title-link">Shop Kid's</Link>
                                                        <div className="image">
                                                            <img src="https://via.placeholder.com/225x155" alt="#" />
                                                        </div>
                                                        <div className="inner-link">
                                                            <Link to="" style={{ backgroundColor: '#fff' }}>Kids Toys</Link>
                                                            <Link to="" style={{ backgroundColor: '#fff' }} >Kids Travel Car</Link>
                                                            <Link to="" style={{ backgroundColor: '#fff' }} >Kids Color Shape</Link>
                                                            <Link to="" style={{ backgroundColor: '#fff' }} >Kids Tent</Link>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li><Link to="">Garen</Link></li>
                                            <li><Link to="">Sett</Link></li>
                                            <li><Link to="">Darius</Link></li>
                                            <li><Link to="">Draven</Link></li>
                                        </ul>
                                    </li>
                                    <li ><NavLink to="/">Home</NavLink></li>
                                    <li><NavLink to="/upload">Upload</NavLink></li>

                                    <li><NavLink to="/shop">Shop<i className="ti-angle-down" /><span className="new">New</span></NavLink>
                                        <ul className="dropdown">
                                            <li><Link to="/shop">Shop Grid</Link></li>
                                            <li><Link to="/cart">Cart</Link></li>
                                            <li><Link to="checkout">Checkout</Link></li>
                                        </ul>
                                    </li>
                                    <li><NavLink to="/page">Pages</NavLink></li>
                                    <li><NavLink to="/blog">Blog<i className="ti-angle-down" /></NavLink>
                                        <ul className="dropdown">
                                            <li><NavLink to="/singleblock">Blog Single Sidebar</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/*/ End Main Menu */}
                </div>
            </div>
        );
    }
}

export default NavbarMainmenu;