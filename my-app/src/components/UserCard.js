import React from 'react';


function UserCard(props){
    console.log("props",props)
    return(
        
            
                <div>
                    <h1>{props.user.name}</h1>
                    <img src={props.user.avatar_url} alt="user"></img>
                    <p>{props.user.bio}</p>
                </div>
        
    
        
        
    )
}



export default UserCard