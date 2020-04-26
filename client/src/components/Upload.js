import React, { Component } from 'react';
import Axios from 'axios';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            descriptions: '',
            price: '',
            image: '',
            images: [],
            numOfImage: 0,
            category: 'Clothers',
            isExactly: false
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleKeyPress = this.onHandleKeyPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onHandleCheck = this.onHandleCheck.bind(this);
        this.onAddImage = this.onAddImage.bind(this);
    }
    onAddImage(e){   
        e.preventDefault();    
        this.setState((state) => {
            const images = [...state.images, state.image]
            return { images, image: '' }
        });
        
    }
    onHandleChange(e) {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    };
    onHandleKeyPress(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
        };
        console.log(this.state)
    };
    onHandleCheck(e) {
        const name = e.target.name
        const checked = e.target.checked;
        this.setState({
            [name]: checked
        });

    };
    onSubmit() {
        const Product = {
            name: this.state.name,
            description: this.state.descriptions,
            price: this.state.price,
            image: this.state.images
        }
        if (this.state.isExactly === true) {
            Axios.post('/api/product/add', Product);
            alert("Updated !!");
            window.location.reload()
        } else {
            alert("Please Checked !");
        }
    };
    render() {
        return (
            <div>
                <section className="shop checkout section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <div className="checkout-form">
                                    <h2>Add Your Product Into Our Shop !</h2>
                                    <p>Product Infomations</p>
                                    {/* Form */}
                                    <form className="form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label>Product Name<span>*</span></label>
                                                    <input type="text" name="name"
                                                        required="required"
                                                        onChange={this.onHandleChange}
                                                        onKeyPress={this.onHandleKeyPress} />

                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <div className="form-group">
                                                    <label>Price<span>*</span></label>
                                                    <input type="number" name="price"
                                                        required="required"
                                                        onChange={this.onHandleChange}
                                                        onKeyPress={this.onHandleKeyPress} />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="form-group">
                                                    <label>Product Descriptions<span>*</span></label>
                                                    <textarea type="text" name="descriptions"
                                                        required="required"
                                                        onChange={this.onHandleChange}
                                                        onKeyPress={this.onHandleKeyPress} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-4 col-8">
                                                <div className="form-group">
                                                    <label>Image <span>*</span></label>
                                                    <input type="text" name="image"
                                                        required="required"
                                                        onChange={this.onHandleChange}
                                                        />
                                                </div>                                              
                                            </div>
                                            <div className="col-lg-2 col-md-6 col-4">
                                                    <div className="form-group" style={{marginTop: '32px'}}>
                                                        <button type="button" onClick={this.onAddImage} className="btn" >Add</button>
                                                    </div>
                                                </div>

                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="form-group">
                                                    <label >Categories <span>*</span> : </label>
                                                    <select className="nice-select"
                                                        name="category"
                                                        onChange={this.onHandleChange}>
                                                        <option value="Clothers">Clothers</option>
                                                        <option value="Apples">Fruits</option>
                                                        <option value="Foods">Foods</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group create-account">
                                                    <input type="checkbox"
                                                        name="isExactly"
                                                        onChange={this.onHandleCheck} />
                                                    <label>Is your information exactly?</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    {/*/ End Form */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="order-details">
                                    {/* Order Widget */}
                                    <div className="single-widget">
                                        <h2>Product Infomation</h2>
                                        <div className="content">
                                            <ul>
                                                <li>Name: {this.state.name}</li>
                                                <li>Descriptions: {this.state.descriptions}</li>
                                                <li>Number of image: {this.state.images.length}</li>
                                                <li className="last">Price<span>{this.state.price}</span></li>
                                                <li>Category:<span>{this.state.category}</span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*/ End Order Widget */}
                                    {/* Button Widget */}
                                    <div className="single-widget get-button">
                                        <div className="content">
                                            <div className="button">
                                                <button onClick={this.onSubmit} className="btn" >Upload Your Product </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/*/ End Button Widget */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*/ End Checkout */}
            </div>
        );
    }
}

export default Upload;