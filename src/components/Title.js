import React from 'react';
import styled from 'styled-components';

const Title = ({ title, subtitle, className }) => (
  <Container className={className}>
    <h4>
      <span className="title">{title}</span>
      <span>{subtitle}</span>
    </h4>
  </Container>
);

const Container = styled.div`
  text-transform: uppercase;
  font-size: 2.3rem;
  margin-bottom: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }

  .title {
    color: var(--mainBlack);
  }

  span {
    display: inline-block;
    margin: 0 0.35px;
  }
`;

export default Title;
