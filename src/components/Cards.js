import React from 'react';
import styled from 'styled-components';
import '../css/card-styles.css';

// Styled Image
const Img = styled.img`
    width: 100%;
    height: 20vw;
    object-fit: cover;
`;

// Capitalizing the first letter in a string, if string is null then returning "No Description"
function Capitalize(str){
    if (str == null) {
        return "No Description";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const Card = ({url, key, description}) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <Img src={url} key={key} alt="" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                    {Capitalize(description)}
                </h4>
            </div>
        </div>
    );
}