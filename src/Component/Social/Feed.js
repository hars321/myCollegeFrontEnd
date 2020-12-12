import React from 'react';

import './Feed.css';

import CardImg from './images/user.png';

import Card from './Card';

class Feed extends React.Component{
    render(){
        return(
            <div className="Feed-Wrapper">
                 
                <div className="Feed">

                    <div className="Feed-Header">

                        <div className="User-Image">
                            <img src={CardImg}></img>
                        </div>

                        <div className="User-Details">
                            <h4>{this.props.name}</h4>
                            <h5> {this.props.bio} </h5>
                        </div>

                    </div>
                    
                    <div className="Feed-Content">
                        <p>{this.props.feedData}
                        </p>
                    </div>

                    <div className="Feed-Footer">
                        <div className="Feed-Buttons">
                            <input type="button" className="btn feed-button" value="Like"></input>
                            <input type="button" className="btn feed-button" value="Comment"></input>
                            <input type="button" className="btn feed-button" value="Share"></input>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Feed;