import React from 'react';

import './Post.css';

import PhotoAlbum from './images/photoalbum.svg';
import DocAlbum from './images/documentalbum.svg';
import videoAlbum from './images/videoalbum.svg';

class Post extends React.Component{
    render(){
        return(
            <div className="Post-Wrapper">
                
                <div className="Post">
                    
                    <div className="Text-input">
                        <textarea id="User-Post" name="User-Post" rows="4" cols="50" placeholder="Your Text here..">
                            
                        </textarea> 
                    </div>

                    <div className="Add-Content">
                        <div className="Icons">
                            <img className="Icons-Image" src={PhotoAlbum} height="30px" width="30px"></img>
                            <h6 className="Icons-Text"> Photos</h6>
                        </div>    
                        <div className="Icons">
                            <img className="Icons-Image"  src={DocAlbum} height="30px" width="30px"></img>
                            <h6 className="Icons-Text"> Documents</h6>
                        </div>  
                        <div className="Icons">
                            <img className="Icons-Image"  src={videoAlbum} height="30px" width="30px"></img>
                            <h6 className="Icons-Text"> Videos</h6>
                        </div>                          

                        <div className="Post-Buttons">
                            <input className="btn btn-success" type="button" value="Post"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Post;