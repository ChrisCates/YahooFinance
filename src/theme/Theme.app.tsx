import styled from 'styled-components';
import { GradBackground, FontColor } from './Theme.core';

export const AppContainer = styled.div`
    background: ${GradBackground};
    color: ${FontColor};
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    font-family: Montserrat;
    letter-spacing: 0.5px;

    input, textarea { outline: none; }
    a { cursor: pointer; }

    &.gradient {
        background: linear-gradient(135deg, rgba(26,26,26,1) 0%, rgba(32,32,32,1) 50%, rgba(49,49,49,1) 100%);
    }
`;

export const PageContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    min-height: calc(100vh - 120px);
    margin: auto;

    div.columns {
        display: flex;
        flex-wrap: wrap;
    }
`;
