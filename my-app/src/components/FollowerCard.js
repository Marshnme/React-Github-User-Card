import React from 'react';


function FollowerCard(props){
    console.log("props",props)
    return(
        <>
        <h2>List of my followers!</h2>
            {props.follower.map(follow => (
                <div>
                    
                    <p>{follow.login}</p>
                    <img src={follow.avatar_url} alt="user"></img>
                    <p>{follow.bio}</p>
                </div>
            ))}
                
        </>
    
        
        
    )
}



export default FollowerCard