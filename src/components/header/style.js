import styled from "styled-components";

export const HeaderView = styled.header`
    display: flex;

    position: fixed;

    justify-content: center;
    align-items: center;

    top: 0px;

    width: 100vw;
    height: 3em;

    background: rgb(77,11,100);
    background: linear-gradient(0deg, rgba(77,11,100,1) 35%, rgba(193,1,234,1) 100%);

    div {
      &:first-child {
        margin-right: 20%;

        img {
            width: 2.5em;
            height: 2.5em;
        }
      }

      &:last-child {
        display: flex;

        justify-content: flex-end;
        
        width: 10em;
        height: 2.2em;

        /* padding-left: 2em; */
        
        align-items: center;

        border-radius: 25px;
        
        background-color: #36004d;

        border-style: groove;
        border-color: orange;
        border-width: 3px;

        margin-left: 20%;

        img {
            width: 2em;
            height: 2em;
            margin-left: 1em;
            margin-right: 0.2em;
        }

        p{
          font-weight: 700;
          color: orange;
        }
      }
    }

    h1 {
        position: relative;
        z-index: 1;
    }
    .points {
      display: flex;

      justify-content: center;

      margin: 0;

      margin-top: 0em;

      width: 16em;
      height: 4em;

      border-radius: 40px 40px 40px 40px;

      background: rgb(77,11,100);
      background: linear-gradient(0deg, rgba(77,11,100,1) 35%, rgba(193,1,234,1) 100%);

      z-index: 1;

      transform: translateY(18%);

      h1 {
        display: flex;

        justify-content: center;
        align-items: center;

        transform: translateY(-.63em);
        
        width: 10em;
        height: 2em;

        border-radius: 25px;

        background: rgb(77,11,100);

        border-style: groove;
        border-color: orange;
        border-width: 3px;

        color: orange;
      }
    }
            
    .points::before{
      content: '';
      position: absolute;
      right: 12px;
      top: -1px;
      width: 24px;
      height: 30px;
      border-bottom: solid 60px rgb(77,11,100);
      border-radius: 0 0 0 100%;
      transform:  rotate(108deg);
    }

    .points::after{
      content: '';
      position: absolute;
      left: 13px;
      top: 0px;
      width: 24px;
      height: 30px;
      border-top: solid 60px rgb(77,11,100);
      border-radius: 100% 0 30% 0;
      transform:  rotate(73deg);      
    }

`;
