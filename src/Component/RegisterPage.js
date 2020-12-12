import React from 'react';
import Navbar from './Navbar.js';
import LoginPage from './Register/LoginPage.js';
import SignupPage from './Register/SignupPage.js';
import Cookies from 'js-cookie'
import  { Route,Redirect } from 'react-router-dom'


class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        let pages=[
            <SignupPage 
            page=
            {
                <h3 onClick={this.changePage}>Login</h3>
                
            }
            />
            ,
            <LoginPage 
            
            page=
            {
                <h3 onClick={this.changePage}>Signup</h3>
                
            }
            />
        ]
        this.state={
            logged_in:Cookies.get("logged_in"),
            login:0,
            pages:pages,
            currentPage:pages[0]
        }
    }
    componentDidMount(){

        this.setState({
            "logged_in":Cookies.get("logged_in")
        })
    }
    changePage=()=>{
        let login=this.state.login?0:1;
        console.log(login);
        console.log(this.state.pages[login]);
        let currentPage=this.state.pages[login];
        this.setState({
            login,
            currentPage
        })
    }
    render(){
    if(!this.state.logged_in){
        return(
            <div>
                <Navbar />
                {this.state.currentPage}        
            </div>
            )
    }
    else{
        return(
            <Route>
            <Redirect to="/" />
            </Route>         
        )
    }
       
}
}
export default RegisterPage;