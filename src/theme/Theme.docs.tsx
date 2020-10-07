import styled from 'styled-components';
import {  } from './Theme.core';

export const DocsContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    div.documentation {
        padding: 100px 15px 15px 15px;

        h2 {
            font-weight: 300;
            font-size: 32px;
            font-family: Oswald;
            letter-spacing: 1px;
            margin: 0 0 15px 0;
        }

        p {
            font-size: 18px;
            margin: 0 0 15px 0;
        }

        div.space { height: 30px; }

        div.documentation-item {
            padding: 0 0 90px 0;
        }
    }
`;

export const DocsNavContainer = styled.div`
    width: 240px;
    padding: 15px;

    img {
        width: 180px;
    }

    a.element {
        display: flex;
        align-items: center;
        padding: 10px;
        font-size: 14px;
    }
`;