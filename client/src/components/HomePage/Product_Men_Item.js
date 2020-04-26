import React, { Component } from 'react';

class menItem extends Component {
    state = {}
    render() {
        const { info } = this.props;
        return (
            <div className="col-xl-3 col-lg-4 col-md-4 col-12">
                <div className="single-product">
                    <div className="product-img">
                        <a data-toggle="modal" 
                                   data-target="#exampleModal" 
                                   title="Quick View" href="abc" 
                                   onClick = {() => this.fetchToggleData(info)}>
                            <img className="default-img" src={info.image[0]} alt="#" />
                            <img className="hover-img" src={info.image[0]} alt="#" />
                        </a>
                        <div className="button-head">
                            <div className="product-action">
                                <a data-toggle="modal" 
                                   data-target="#exampleModal" 
                                   title="Quick View" href="abc" 
                                   onClick = {() => this.fetchToggleData(info)}>
                                    <i className=" ti-eye" />
                                    <span>View</span>
                                </a>
                                <a title="Wishlist" href="abc"><i className=" ti-heart " /><span>Add to Wishlist</span></a>
                                <a title="Compare" href="abc"><i className="ti-bar-chart-alt" /><span>Add to Compare</span></a>
                            </div>
                            <div className="product-action-2">
                                <a title="Add to cart" href="abc">Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <h3><a href="product-details.html">{info.name}</a></h3>
                        <div className="product-price">
                            <span>{info.price} $</span>
                        </div>
                    </div>
                </div>             
            </div>
        );
    }
    fetchToggleData(info){
        this.props.toggle(info);        
    }
}

export default menItem;