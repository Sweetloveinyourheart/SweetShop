import React, { Component } from 'react';
import Item from './Product_Men_Item';

class Men extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { product, toggle } = this.props;
        return (
        <div className="tab-pane fade show active" id="man" role="tabpanel">
            <div className="tab-single">
                <div className="row">
                    {this.showProduct(product, toggle)}
                </div>
            </div>
        </div>
        );
    }
    showProduct(product, toggle) {
        if (product) {
            var result = null;
            result = product.map((value, index) => {
                return <Item info={value} key={index} toggle={toggle} />
            })
            return result;
        }   else return <p>No Product</p>
    }
}

export default Men;