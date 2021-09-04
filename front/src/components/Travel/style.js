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


    .description{
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 3px 7px ;
    }

    .title{
        display: flex;
        height: 60px;
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

    i{
        padding-right: 5px;
        color: #0D89EC;
    }

`;