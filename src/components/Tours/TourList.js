import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tour from './Tour';
import Title from '../Title';

const TourList = props => {
  const [sortedTours, setSortedTours] = useState([]);

  useEffect(() => {
    setSortedTours(props.tours.edges);
  }, [props.tours.edges]);

  const sortedToursArr = sortedTours.map(({ node }, index) => (
    <Tour key={`${node.cententful_id}${index}`} tour={node} />
  ));

  return (
    <Container>
      <Title title="our" subtitle="tours" />
      <div className="center">{sortedToursArr}</div>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 0;
  text-align: center;

  .center {
    width: 100%;
    max-width: 1170px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

export default TourList;
