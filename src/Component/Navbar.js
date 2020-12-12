import React from 'react';
import Cookies from 'js-cookie';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            logged_in:this.props.state
        }
    }
    logout=()=>{
        console.log("logout");
        Cookies.remove("session_id");
        Cookies.remove("logged_in");
        
        this.setState({
            logged_in:false
        })
    }
    componentDidMount(){
        this.setState({
            logged_in:Cookies.get("logged_in")
        })
    }
    render(){
        return(    
            
    <section class="navbar-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <nav class="navbar navbar-expand-lg">
                       
                        <a class="navbar-brand" href="#">
                            <img src="assets/images/logo.svg" alt="Logo"/>
                        </a>
                        
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTwo" aria-controls="navbarTwo" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                            <span class="toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse sub-menu-bar" id="navbarTwo">
                            <ul class="navbar-nav m-auto">
                                <li class="nav-item active"><a class="page-scroll" href="#home">home</a></li>
                                <li class="nav-item"><a class="page-scroll" >ERP</a></li>
                                <li class="nav-item"><a class="page-scroll" >Social</a></li>
                                
                            </ul>
                        </div>
                        
                        <div class="navbar-btn d-none d-sm-inline-block">
                            <ul>
                            {
                            this.state.logged_in?

                            <li><a class="solid" onClick={this.logout}>Logout</a></li>
                            :
                            <li><a class="solid" href="/register">Register</a></li>
                            
                               

                            }                   
                            </ul>
                        </div>
                    </nav> 
                </div>
            </div> 
        </div> 
    </section>

        )
    }
}

export default Navbar;