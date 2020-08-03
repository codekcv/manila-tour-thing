import React from 'react';
import Tour from '../Tours/Tour';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Title';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

const getTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const FeaturedTours = () => {
  const response = useStaticQuery(getTours);

  return (
    <Container>
      <Title title="featured" subtitle="tours" />
      <div className="center">
        {response.featuredTours.edges.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
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

export default FeaturedTours;
