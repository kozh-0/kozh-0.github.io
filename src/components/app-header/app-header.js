import React from "react";
// import "./app-header.css";

import styled from 'styled-components';
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        transition: all .5s ease;
        :hover {
            color: #D94525;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }

`

const AppHeader = () => {
    return (
        <Header as='a'>
            <h1>Kozhevnikov Dmitry</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}

export default AppHeader;