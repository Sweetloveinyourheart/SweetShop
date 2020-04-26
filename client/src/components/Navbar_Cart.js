import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
class NavbarCart extends Component {
    render() {
        return (
            <div className="shopping-item">
                <div className="dropdown-cart-header">
                    <span>1 Items</span>
                    <Link to="/cart" >View Cart</Link>
                </div>
                <ul className="shopping-list">
                    <li>
                        <button  className="remove" title="Remove this item"><i className="fa fa-remove" /></button>
                        <Link to="/" className="cart-img" ><img src="https://via.placeholder.com/70x70" alt="" /></Link>
                        <h4>Woman Ring</h4>
                        <p className="quantity">1x - <span className="amount">$99.00</span></p>
                    </li>
                </ul>
                <div className="bottom">
                    <div className="total">
                        <span>Total</span>
                        <span className="total-amount">$134.00</span>
                    </div>
                    <Link to="/cart" className="btn animate">Checkout</Link>
                </div>
            </div>
        );
    } 
}

export default NavbarCart;