import styled from 'styled-components';

export const HomeView = styled.main`
    margin-top: 9em;
    display: flex;

    align-items: center;
    justify-content: space-evenly;

    main {
        display: flex;
    
        article {
            display: flex;
    
            justify-content: space-between;
    
            flex-wrap: wrap;

            &:last-child {
                width: 40vw;
            }
    
    
            margin-left: 1em;
        }
    }

    .arrow {
        margin: 1.5em;
        img {
            width: 3.5em;
        }
    }

    @media(max-width: 1244px) {
        margin-top: 13em;
        main {
            /* display: grid;

            flex-wrap: wrap;

            padding: 20em; */

            article {
                &:first-child {
                    position: absolute;

                    top: 0px;
                    left: 43vw;

                    width: 10em;
                    height: 21em;
                }
                &:last-child {
                    width: 32em;
                    height: 20em;
                }

            }
        }
    }
`;
