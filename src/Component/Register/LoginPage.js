import React from 'react';
import { render } from 'react-dom';
import './LoginPage.css';
import './Register.css';

import  { Route,Redirect } from 'react-router-dom'

import './css/main.css';

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
        this.alert=React.createRef();

        this.state={
            path:""
        }
      }

    isInValid(data){
        if(data==undefined || data.length==0){
            return true
        }
        return false;
    }
    alertUser(current){
        this.alert.current.innerText=`${current} field cannot be blank !`
        setTimeout(()=>{
            this.alert.current.innerText=""
        }, 2000);
    }
    postForm(body){
        let url="http://localhost:4000/login"
        console.log(body)
        const requestOptions = {
            method: 'POST',
            // withCredentials: true, 
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(body)
        };
        return fetch(url, requestOptions)
            .then(response => response.json()
            .then(data=>
            {
                
                return  this.setState({
                    path:<Route><Redirect to="/" /></Route>

                })
                
            })
            .catch(err=>{
                console.log(err)
            }))
            .catch(err=>{
                console.log(err)
            })
        }
    validate({email,password}){
        if(this.isInValid(email)){
            this.alertUser("Email");
        }
        else if(this.isInValid(password)){
            this.alertUser("Password")
        }
        else{
            return true;
        }
        return false;
    }
    submitData=()=>{
        let obj={
            "email":this.email.current.value,
            "password":this.password.current.value,
        }
        
        if(this.validate(obj)){
            return this.postForm(obj);
        }
        
    }
    render(){
    if(this.state.path==""){

        return(
            <div class="page-wrapper bg-gra-01 justify-content-center font-poppins">
                
                <div class="wrapper wrapper--w780">
                    <div class="card card-3">
                            <div class="card-heading"></div>
                        <div class="card-body">
                            <h2 class="title">Login</h2>
                            {this.props.page}
                            <form >
                                
                                <div class="input-group">
                                    <input class="input--style-3" type="email" placeholder="Email" name="email" ref={this.email} />
                                </div>
                                <div class="input-group">
                                    <input class="input--style-3" type="password" placeholder="password" name="password" ref={this.password} />
                                </div>
                                <div class="p-t-10">
                                    <button class="btn btn--pill btn--green" onClick={this.submitData} type="button">Submit</button>
                                </div>
                                <div className="form-alert" ref={this.alert} >
                                    {/* lkafj */}
                                </div>
                                <div className="change-page">
                                    {this.props.page}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>    
            </div>

        )
    }
    else{
        return(
            this.state.path
        )
    }
        
    }
}

export default LoginPage;