import React from 'react';
import Card from './Card';

import './Group.css';


class Friends extends React.Component{
    render(){
        return(
            <div className="Group-Wrapper">
                
                <div className="Group ccenter">
                    <div className="Title b-bottom">
                        <h4>Group</h4>
                    </div>

                    <Card name="Group 1"  button1="Join" button2="View"/>
                    <Card name="Group 2"  button1="Join" button2="View"/>
                    <Card name="Group 3"  button1="Join" button2="View"/>
                </div>
                    
            </div>
        )
    }
}
export default Friends;