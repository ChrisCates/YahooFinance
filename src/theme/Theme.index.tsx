import styled from 'styled-components';
import {  } from './Theme.core';

export const IndexContainer = styled.div`
    width: 100%;
    max-width: 768px;
    margin: auto;
    padding: 15px;
    img {
        display: block;
        margin: 45px auto 15px auto;
        width: 320px;
    }

    h2 {
        font-family: Oswald;
        font-size: 24px;
        letter-spacing: 1px;
        text-align: center;
        padding: 0 0 30px 0;
    }

    div.snippet {
        padding: 15px 0;

        h3 {
            font-size: 18px;
        }

        button {
            margin: 15px auto;
        }
    }
`;