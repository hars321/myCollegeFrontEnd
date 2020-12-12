import React from 'react';
import Card from './Card';
import Friends from './Friends';
import './Main.css';
import Post from './Post.js';
import User from './User';
import Group from './Group';
import FeedPage from './FeedPage';

import  { Route,Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            "logged_in":Cookies.get("logged_in")
        }
      }
      componentDidMount(){

        this.setState({
            "logged_in":Cookies.get("logged_in")
        })
    }
    render(){
    if(this.state.logged_in){
        return(
            <div className="Main-Wrapper">
                <div className="Main">

                    <div className="Left back-white js-center">
                        <User className="grid1"/>
                        <Group className="grid2"/>
                        
                    </div>

                    <div className="Middle back-white js-center">
                        
                        <Post/>
                        <FeedPage/>
                    </div>

                    <div className="Right back-white js-center">
                        <Friends/>
                       
                    </div>

                </div>
            </div>
        )
    }
    else{
        return(
            <Route>
                <Redirect to="/register"/>
            </Route>
        )
    }
    }
}
export default Main;