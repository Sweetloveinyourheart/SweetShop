import React, { Component } from 'react';
class ModalImage extends Component {
    state = {}
    render() {
        const {link} = this.props;
        console.log(link);
        return (
        <div className="col-lg-4 col-md-6 col-12">
            <img style={{ marginTop: '40px' }} src={link} alt="#" />
        </div>);
    }
}

export default ModalImage;