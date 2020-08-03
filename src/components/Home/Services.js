import React from 'react';
import Title from '../Title';
import services from '../../constants/services';
import styled from 'styled-components';

const Services = () => (
  <Container>
    <Title title="our" subtitle="services" />

    <div className="center">
      {services.map((item, index) => (
        <article key={index} className="service">
          <span>{item.icon}</span>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  </Container>
);

const Container = styled.section`
  background: var(--mainGrey);
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
  }

  .service {
    margin: 2rem 0;
    text-align: center;
  }

  .service span {
    background: var(--primaryColor);
    padding: 0.5rem;
    display: inline-block;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .service h4 {
    text-transform: uppercase;
  }
`;

export default Services;
