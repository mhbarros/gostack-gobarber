import styled from 'styled-components';
import { shade } from 'polished';

import SignUpBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

`

export const Content = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 900px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
    }

    a:hover {
      color: ${shade(.2, '#f4ede8')}
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color .2s;

    &:hover {
      color: ${shade(.2, '#f4ede8')};
    }

    svg {
      margin-right: 16px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${SignUpBackground}) no-repeat center;
  background-size: cover;
`
