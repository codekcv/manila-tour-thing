import React from 'react';
import styled from 'styled-components';

const Banner = ({ title, info, children }) => (
  <Container>
    <h1>{title}</h1>
    <p>{info}</p>
    {children}
  </Container>
);

const Container = styled.div`
  text-align: center;
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);

  .banner h1 {
    font-size: 4.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    padding: 0 1rem;
    letter-spacing: 6px;
  }

  .banner p {
    width: 70%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
`;

export default Banner;
