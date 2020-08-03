import React from 'react';
import Title from '../Title';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "manila.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout);

  return (
    <Container>
      <Title title="about" subtitle="us" />

      <div className="about-center">
        <article className="about-img">
          <div>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>

        <article className="about-info">
          <h4>See For Yourself</h4>

          <p>We are the ultimate atomic mega touring agency here in Manila.</p>

          <p>
            If you like our tour please rate me 5. If not then it's free(For
            real!). Anyway, give it a go!
          </p>

          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 4rem 0;

  .about-center {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    margin-top: 3rem;
    margin: 0 auto;
    width: 95vw;
    max-width: 1170px;
  }

  .about-img {
    margin: 3rem 0;
  }

  .about-info {
    margin: 0;
    margin-top: 3rem;
  }

  .about-img {
    position: relative;
    margin: 0;
  }

  .about-img img {
    width: 100%;
    display: block;
    box-shadow: var(--lightShadow);
    max-height: 500px;
  }

  .about-img div {
    box-shadow: var(--lightShadow);
  }

  .about-info h4 {
    font-size: 1.9rem;
    text-transform: uppercase;
  }

  .about-info p {
    width: 80%;
  }

  .img-container {
    max-height: 500px;
  }
`;

export default About;
