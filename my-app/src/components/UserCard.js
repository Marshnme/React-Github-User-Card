import React from 'react';
import styled from "styled-components"

const ImgDiv = styled.img`
    width:20%;
    height:50%;
`;



function UserCard(props){
    console.log("props",props)
    return(
        
            
                <div>
                    <h1>{props.user.name}</h1>
                    <div>
                        <ImgDiv src={props.user.avatar_url} alt="user"></ImgDiv>
                    </div>
                    
                    <p>{props.user.bio}</p>
                </div>
        
    
        
        
    )
}



export default UserCard