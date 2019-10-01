import React from 'react';
import styled from "styled-components"


const FollowContain = styled.div`
    display:flex;
    flex-direction: column ;
    width:20vw;
    height:30vh;
    border:1px solid black
    margin:3%;
    
`;

const ImgDiv = styled.img`
    width:70%;
    height:100%;
    
`;

const ImgCon = styled.div`
    height:20vh;
    display:flex;
    justify-content:center;
    margin-bottom:2%;
`;

function FollowerCard(props){
    console.log("props",props)
    return(
        <>
            {props.follower.map(follow => (
                <FollowContain key={follow.id}>
                    
                    <h3>{follow.login}</h3>
                    <ImgCon>
                        <ImgDiv src={follow.avatar_url} alt="user"></ImgDiv>
                    </ImgCon>
                    
                        <a href={follow.html_url}>{follow.login}'s Github!</a>
                        
                    
                </FollowContain>
            ))}
                
        </>
    
        
        
    )
}



export default FollowerCard