import styled from 'styled-components';

export const Container = styled.div`
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    #login-container{
        display: flex;
        flex-direction: column;

        justify-content: space-around;

        width: 300px;
        height: 400px;
    };

    .form-floating{
        padding-bottom: 14px;
    }

    img{
        margin-bottom: 25px;
    }
`;
