import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import NavbarCart from './Navbar_Cart';
import NavbarMainmenu from './Navbar_Mainmenu';

class Navbar extends Component {

    render() {
        return (
            <header className="header shop">
                <div className="middle-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-12">
                                {/* Logo */}
                                <div className="logo">
                                    <Link to="/"><img src="images/logo.png" alt="logo" /></Link>
                                </div>
                                {/*/ End Logo */}
                                {/* Search Form */}
                                <div className="search-top">
                                    <div className="top-search"><a href="#0"><i className="ti-search" /></a></div>
                                    {/* Search Form */}
                                    <div className="search-top">
                                        <form className="search-form">
                                            <input type="text" placeholder="Search here..." name="search" />
                                            <button value="search" type="submit"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                    {/*/ End Search Form */}
                                </div>
                                {/*/ End Search Form */}
                                <div className="mobile-nav" />
                            </div>
                            <div className="col-lg-8 col-md-7 col-12">
                                <div className="search-bar-top">
                                    <div className="search-bar">
                                        <form>
                                            <input name="search" placeholder="Search Products Here....." type="search" />
                                            <button className="btnn"><i className="ti-search" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-12">
                                <div className="right-bar">
                                    {/* Search Form */}
                                    <div className="sinlge-bar">
                                        <Link to="/like" className="single-icon"><i className="fa fa-heart-o" aria-hidden="true" /></Link>
                                    </div>
                                    <div className="sinlge-bar">
                                        <Link to="/itemmanager" className="single-icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></Link>
                                    </div>
                                    <div className="sinlge-bar shopping">
                                        <Link to='/cart' className="single-icon"><i className="ti-bag" /> <span className="total-count">2</span></Link>
                                        {/* Shopping Item */}
                                        <NavbarCart />
                                        {/*/ End Shopping Item */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Inner */}
                <div className="header-inner">
                    <div className="container">
                        <div className="cat-nav-head">
                            <div className="row">
                                
                                <NavbarMainmenu />
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ End Header Inner */}
            </header>
        );
    }
}

export default Navbar;