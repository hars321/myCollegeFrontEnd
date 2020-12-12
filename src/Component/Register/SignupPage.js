import React from 'react';
import { render } from 'react-dom';
import './SignupPage.css';
import './Register.css';

import  { Route,Redirect } from 'react-router-dom'
import './css/main.css';

class SignupPage extends React.Component{
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.password = React.createRef();
        this.phone = React.createRef();
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
    validate({name,email,password,phone}){
        if(this.isInValid(name)){
            this.alertUser("Name");
        }
        else if(this.isInValid(email)){
            this.alertUser("Email");
        }
        else if(this.isInValid(phone)){
            this.alertUser("Phone")
        }
        else if(this.isInValid(password)){
            this.alertUser("Password")
        }
        else{
            return true;
        }
        return false;
    }
    postForm(body){
        let url="http://localhost:4000/signup"
        console.log(body)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // withCredentials: true, 
            credentials: 'include',
            body:JSON.stringify(body)
        };
        return fetch(url, requestOptions)
            .then(response => response.json()
            .then(data=>{
                
                return this.setState({
                    path:<Route><Redirect to="/" /></Route>

                })
            })
            .catch(err=>{
                return console.log(err)
            })
            )

            .catch(err=>{
                return console.log(err)
            })
            // .then(data => this.setState({ postId: data.id }));

    }
    submitData=()=>{
        let obj={
            "name":this.name.current.value,
            "email":this.email.current.value,
            "password":this.password.current.value,
            "phone":this.phone.current.value
        }
        
        
        if(this.validate(obj)){
            return this.postForm(obj)
        }
    }
    render(){
        if(this.state.path==""){
            return(
                <div class="page-wrapper bg-gra-01 justify-content-center  font-poppins">
                    <div class="wrapper wrapper--w780">
                        <div class="card card-3">
                            <div class="card-heading"></div>
                            <div class="card-body">
                                <h2 class="title active">Signup</h2>
                                
                                <form>
                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Name" name="name" ref={this.name} required/>
                                    </div>
    
                                    <div class="input-group">
                                        <input class="input--style-3" type="email" placeholder="Email" name="email" ref={this.email} required/>
                                    </div>
                                    <div class="input-group">
                                        <input class="input--style-3" type="text" placeholder="Phone" name="phone" ref={this.phone} required/>
                                    </div>                          
                                    <div class="input-group">
                                        <input class="input--style-3" type="password" placeholder="password" name="password" ref={this.password} required/>
                                    </div>
                                    <div class="p-t-10">
                                        <button class="btn btn--pill btn--green" type="button" onClick={this.submitData}>Submit</button>
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
            return (this.state.path)
        }
        
    }
}


export default SignupPage;