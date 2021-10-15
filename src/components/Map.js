import React from "react";
import styled from "styled-components";
import PText from "./PText";
import MapImg from '../assets/images/atl.png';

const MapStyles = styled.div`
background: url(${MapImg}) no-repeat center / cover;
min-height: 400px;
.container {
    position: relative;
    min-height: 400px;
    
}
.map_card{
    position: absolute;
    right: 27%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width:300px;
    border-radius: 12px;
    
}
.map_card_heading{
    font-size: 2rem;
    margin-bottom: 1rem;
    font-family:'arial'
}
.map_card_link{
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
}

@media only screen and (max-width: 768px) {
    background-position: 60% center;
}
@media only screen and (max-width: 400px) {
    .map_card{
        max-width:none;
        right:auto;
    }
}
`;

export default function Map() {
    return(
        <MapStyles>
            <div className="container">
                <div className="map_card">
                    <h3 className="map_card_heading">
                        I am here!
                    </h3>
                    <PText>Reynoldstown, Atlanta, GA</PText>
                    <a href="https://goo.gl/maps/LZwLf7HhETVA2V6D7" target="_blank" rel="noreferrer" className="map_card_link">Open in Google Maps</a>
                </div>
            </div>
        </MapStyles>
    )
}