import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const getImage = graphql`
  query {
    manila: file(relativePath: { eq: "manila.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const Hero = ({ img, children, home }) => {
  const data = useStaticQuery(getImage);

  return (
    <Container fluid={img || data.manila.childImageSharp.fluid} home={home}>
      {children}
    </Container>
  );
};

const Container = styled(BackgroundImage)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(215, 218, 45, 0.3), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Hero;
