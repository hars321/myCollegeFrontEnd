import React from 'react';

import './FeedPage.css';

import Feed from './Feed';

class FeedPage extends React.Component{
    render(){
        return(
            <div className="FeedPage-Wrapper ">
                 
                <div className="FeedPage ccenter">
                    

                    
                    <Feed name="user1"  bio="User- Bio" feedData="akjdf alkdfj lajf alkfj alkjfd lajf lajk dflkjafl kjalfj lakjf lajf lakj dlfkja lf
                            jafdjahflaf akjdfl afl ajlfk alkfj aj flaj flkja flkja lfaj lakj flkaj flkja flja lf lajf lakjf lajk flkja lfj aljf a
                            a dkfjal fjajlakjf laj dlfjalfj alkjf lakj ladjk console.log(ad kjaflafl 
                            akldjf aljf);"/>
                    <Feed name="user2"  bio="User- Bio" feedData="akjdf alkdfj lajf alkfj alkjfd lajf lajk dflkjafl kjalfj lakjf lajf lakj dlfkja lf
                            jafdjahflaf akjdfl afl ajlfk alkfj aj flaj flkja flkja lfaj lakj flkaj flkja flja lf lajf lakjf lajk flkja lfj aljf a
                            a dkfjal fjajlakjf laj dlfjalfj alkjf lakj ladjk console.log(ad kjaflafl 
                            akldjf aljf);"/>
                    <Feed name="user3"  bio="User- Bio" feedData="akjdf alkdfj lajf alkfj alkjfd lajf lajk dflkjafl kjalfj lakjf lajf lakj dlfkja lf
                            jafdjahflaf akjdfl afl ajlfk alkfj aj flaj flkja flkja lfaj lakj flkaj flkja flja lf lajf lakjf lajk flkja lfj aljf a
                            a dkfjal fjajlakjf laj dlfjalfj alkjf lakj ladjk console.log(ad kjaflafl 
                            akldjf aljf);"/>
                    
                </div>

            </div>
        )
    }
}
export default FeedPage;