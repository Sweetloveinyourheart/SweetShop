import React, { Component } from 'react';
import ModalImage from './Modal_Image';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { dataToggle } = this.props;
        const image = dataToggle.image;
        console.log(image)
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true" /></button>
                        </div>
                        <div className="modal-body">
                            <div className="row no-gutters">

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="quickview-content">
                                        <h2>{dataToggle.name}</h2>
                                        <div className="quickview-ratting-review">
                                            <div className="quickview-ratting-wrap">
                                                <div className="quickview-ratting">
                                                    <i className="yellow fa fa-star" />
                                                    <i className="yellow fa fa-star" />
                                                    <i className="yellow fa fa-star" />
                                                    <i className="yellow fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </div>
                                                <a href="abc"> (1 customer review)</a>
                                            </div>
                                            <div className="quickview-stock">
                                                <span><i className="fa fa-check-circle-o" /> in stock</span>
                                            </div>
                                        </div>
                                        <h3>{dataToggle.price} $</h3>
                                        <div className="quickview-peragraph">
                                            <p>{dataToggle.description}</p>
                                        </div>

                                        <div className="quantity">
                                            {/* Input Order */}
                                            <div className="input-group">
                                                <div className="button minus">
                                                    <button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
                                                        <i className="ti-minus" />
                                                    </button>
                                                </div>
                                                <input type="text" name="quant[1]" className="input-number" data-min={1} data-max={1000} defaultValue={1} />
                                                <div className="button plus">
                                                    <button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
                                                        <i className="ti-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                            {/*/ End Input Order */}
                                        </div>
                                        <div className="add-to-cart">
                                            <a href="abc" className="btn">Add to cart</a>
                                            <a href="abc" className="btn min"><i className="ti-heart" /></a>
                                            <a href="abc" className="btn min"><i className="fa fa-compress" /></a>
                                        </div>
                                        <div className="default-social">
                                            <h4 className="share-now">Share:</h4>
                                            <ul>
                                                <li><a className="facebook" href="abc"><i className="fa fa-facebook" /></a></li>
                                                <li><a className="twitter" href="abc"><i className="fa fa-twitter" /></a></li>
                                                <li><a className="youtube" href="abc"><i className="fa fa-pinterest-p" /></a></li>
                                                <li><a className="dribbble" href="abc"><i className="fa fa-google-plus" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="row">
                                            {this.showProduct(image)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    showProduct(image) {
        if (image) {
            var result = null;
            result = image.map((value, index) => {
                return <ModalImage link={value} key={index} />
            })
            return result;
        }
    }
}

export default Modal;