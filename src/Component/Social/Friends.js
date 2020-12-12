import React from 'react';

import './Friends.css';

import Card from './Card';


class Friends extends React.Component{
    render(){
        return(
            <div className="Friends-Wrapper ">
                 
                <div className="Friends ccenter">
                    
                    <div className="Title b-bottom">
                        <h4>Friends</h4>
                    </div>
                    
                    <Card name="user1"  button1="Add" button2="Profile"/>
                    <Card name="user2"  button1="Add" button2="Profile"/>
                    <Card name="user3"  button1="Add" button2="Profile"/>
                    
                </div>

            </div>
        )
    }
}
export default Friends;