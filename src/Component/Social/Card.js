import React from 'react';

import './Card.css';

import CardImg from './images/user.png';


class Card extends React.Component{
    constructor(props){
        super(props);
        this.state={
            image:CardImg,
            name:"User",
            button1:"click",
            button2:"view"
        }
    }
    checkUndefined(obj){
        if(obj==undefined || obj==""){
            return true;
        }
        return false;
    }
    componentDidMount(){
        let image=this.checkUndefined(this.props.image)?this.state.image:this.props.image;
        let name=this.checkUndefined(this.props.name)?this.state.name:this.props.name;
        let button1=this.checkUndefined(this.props.button1)?this.state.button1:this.props.button1;
        let button2=this.checkUndefined(this.props.button2)?this.state.button2:this.props.button2;

        this.setState({
            image,
            name,
            button1,
            button2
        })
    }
    render(){
        return(
            <div className="Card-Wrapper">
                
                <div className="Card">
                    
                    <div className="Card-Left">
                        <div className="ring Card-Image">
                            <img className="User-Photo" src={this.state.image}/>
                        </div>
                    </div>

                    <div className="Card-Right">
                        <div className="Card-Data">
                            <h5>{this.state.name}</h5>
                        </div>
                        <div className="Card-Buttons">
                            <input type="button" className="bton button1" value={this.state.button1}></input>
                            <input type="button" className="bton button1" value={this.state.button2}></input>
                        </div>
                    </div>

                </div>
                    
            </div>
        )
    }
}
export default Card;