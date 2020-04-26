import React, {Suspense} from 'react';
import { Route, Switch } from "react-router-dom";

import notfound from './Notfound';
import HomeContainer from './../containers/HomeContainer.js';
import Navbar from './Navbar';
import Footer from './Footer';
import Upload from './Upload';

function App() {
  return (
    <Suspense fallback={<div>Loading ... </div>}>    
    <Navbar/>
       
        <Switch>
          <Route path="/" exact component ={HomeContainer} /> 
          <Route path="/upload" exact  component = {Upload} />               
          <Route component={notfound} />
        </Switch>

    <Footer />    
    </Suspense>
  );
}

export default App;
