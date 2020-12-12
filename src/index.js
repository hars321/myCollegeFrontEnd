import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route} from 'react-router';
import { BrowserRouter,Redirect } from 'react-router-dom';

import './index.css';

import reportWebVitals from './reportWebVitals';

import Navbar from './Component/Navbar';
import LandingPage from './Component/LandingPage';
import RegisterPage from './Component/RegisterPage';

import SocialMedia from './Component/Social/Main';

import Cookies from 'js-cookie';


class Index extends React.Component{
  
}
ReactDOM.render(
  
    <BrowserRouter>
      <Route exact path='/social' component={SocialMedia}></Route>
      <Route exact path='/register' component={RegisterPage}></Route>
      <Route exact path='/' component={LandingPage}></Route>      
    </BrowserRouter>
    
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
