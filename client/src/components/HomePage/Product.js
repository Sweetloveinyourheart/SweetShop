import React, { Component } from 'react';
import Men from './Product_Men';
import Woman from './Product_Woman';
import Kid from './Product_Kid';
import Accessories from './Product_Accessories';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {product, toggle} = this.props;
        return (
            <div className="product-area section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>All Shop Item</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <div className="nav-main">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Clothers</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Fruits</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Kids</a></li>
                                        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Accessories</a></li>                                       
                                    </ul>                                   
                                </div>
                                <div className="tab-content" id="myTabContent">                                   
                                    <Men product={product} toggle={toggle} />                                    
                                    <Woman />                               
                                    <Kid />
                                    <Accessories />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;