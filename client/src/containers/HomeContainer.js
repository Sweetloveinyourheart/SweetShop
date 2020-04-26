import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

import SmallBanner from '../components/HomePage/SmallBanner';
import Product from '../components/HomePage/Product';
import MidiumBanner from '../components/HomePage/MidiumBanner';
import PopularArea from '../components/HomePage/PopularArea';
import ShopHomeList from '../components/HomePage/ShopHomeList';
import Cowndown from '../components/HomePage/Cowndown';
import SmallBlog from '../components/HomePage/SmallBlog';
import { ApiData,DataToggle } from '../actions/ProductActions';
import Modal from '../components/HomePage/Modal';

class HomeContainer extends Component {
    async componentDidMount(){
        const responsive = await Axios.get('/api/product');
        const data = responsive.data;
        this.props.GetAPIData(data);
    }
    render() {
        const {AllAPIData, DataAPIToggle, ToggleData} = this.props;
        
        return (  
            <div>
                <Cowndown />
                <SmallBanner />
                <Product product={AllAPIData} toggle={DataAPIToggle}/>
                <MidiumBanner />
                <PopularArea />
                <ShopHomeList />
                <SmallBlog />
                <Modal dataToggle ={ToggleData}/>
            </div>
         );
    }

};
const mapStatetoProps = (state) => {
    return {
        AllAPIData: state.AllData,
        ToggleData: state.DataToggle
    }
};
const mapDispatchtoProps = (dispatch) => {
    return {
        GetAPIData: (data) =>  dispatch(ApiData(data)),
        DataAPIToggle: (data) => dispatch(DataToggle(data))
    }
};

 
export default connect(mapStatetoProps, mapDispatchtoProps)(HomeContainer);