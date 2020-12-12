import React from 'react';

import './User.css';

import userImg from './images/user.png';

class User extends React.Component{
    render(){
        return(
            <div className="User-Wrapper">
                
                <div className="User">
                    

                    <div className="User-Images">
                        <div className="User-Profile-Background">
                            <div className="ring">
                                <div className="User-Profile-Photo">
                                    <img src={userImg} ></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="User-Bio">

                        <div className="User-Name">
                            Harshit Garg
                        </div>
                        <div className="User-Bio-Description">
                            This is User Bio
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}
export default User;