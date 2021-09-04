import styled from 'styled-components';

export const Container = styled.div`
    
    display: block;

    .products{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        box-sizing: border-box;
    }

    .product{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 360px;
        margin: 15px;
    }

    .img-cover{
        width: 100%;
        height: 200px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: flex-end;
    }

    span, p {
        text-align: justify;
    }

`;