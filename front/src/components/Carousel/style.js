import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;

    > img{
        width: 300px;
        height: 200px;
    }

    figcaption{
        position: absolute;
        top: 0px;
        background-color: rgba(0,0,0,0.4);
        width: 100%;
        height: 95%;
        box-sizing: border-box;
        color: whitesmoke;

        opacity: 0;
    }

    figure:hover figcaption {
        opacity: 1;
    }

    h2{
        padding-bottom: 30px;
    }
`;