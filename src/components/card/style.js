import styled from 'styled-components'

export const CardView = styled.div`
    display: flex;

    justify-content: center;

    width: 10em;
    height: 10em;

    border-radius: 12px;

    color: orange;
    font-weight: 700;

    
    border-style: groove;
    border-color: orange;
    border-width: 3px;

    @keyframes pulse {
    0%, 100% {
        transform: scale(1);
        animation-timing-function: ease-in;
    }

    50% {
        transform: scale(1.1);
    }
    }

    &:hover {
        transform: scale(1.33);
        animation: pulse 2s infinite;
    }

    div {
        display: flex;

        justify-content: center;
        align-items: center; 

        position: absolute;

        /* background-color: red; */

        z-index: 1;

        transform: translateY(122px);

        img {
            position: absolute;
            height: 2em;
            width: 7em;
        }

        p {
            z-index: 2;
            font-size: small;
        }
    }

    main {
        width: 10em;
        height: 10em;
    }

    img {
        width: 10em;
        height: 10em;
    }
`;

export const CardBigView = styled.aside`
    width: 10em;
    height: 21em;

    background-color: blue;

    border-style: groove;
    border-color: orange;
    border-width: 3px;
    border-radius: 10px;

    @media(max-width: 1244px) {
        transform: rotate(90deg);
    }
`;
