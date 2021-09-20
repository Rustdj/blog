import React from "react";


import './app-header.css';
import styled from 'styled-components';

const Header = styled.div `
    display: flex;
    align-items: flex-end;
	justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? '#d3d3e6;' : 'black'}; // тернатный оператор!
        :hover {
            color: orange;
            transition: 0.7s;
            cursor: pointer;
        }
    }
    h2 {
        font-size: 1.2rem;
	    color: #e2dcdc;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return ( 
        <Header colored>
            <h1> Rustam Raikerus</h1> 
            <h2>{allPosts} записей, из них понравилось {liked}</h2> 
        </Header>
    )
}

export default AppHeader;