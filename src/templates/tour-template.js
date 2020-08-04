import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from 'gatsby-image';
import { FaMoneyBillWave } from 'react-icons/fa';
import Day from '../components/SingleTour/Day';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import SEO from '../components/SEO';
import styled from 'styled-components';

const Template = ({ data }) => {
  const {
    name,
    price,
    days,
    start,
    description: { description },
    journey,
    images,
  } = data.contentfulTour;

  const [mainImage, ...tourImages] = images;

  const tourImagesArr = tourImages.map((image, index) => {
    return (
      <Image
        key={index}
        fluid={image.fluid}
        alt="single tour"
        className="image"
      />
    );
  });

  return (
    <Layout>
      <SEO title={name} />
      <Hero img={mainImage.fluid} />

      <Container>
        <div className="center">
          <div className="images">{tourImagesArr}</div>
          <h2>{name}</h2>

          <div className="info">
            <p>
              <FaMoneyBillWave className="icon" />
              starting from ₱{price}
            </p>
          </div>

          <h4>Starts On : {start}</h4>
          <h4>Duration: {days} days</h4>

          <p className="desc">{description}</p>
          <h2>daily schedule</h2>

          <div className="journey">
            {journey.map((item, index) => (
              <Day key={index} day={item.day} info={item.info} />
            ))}
          </div>

          <AniLink fade to="/tours" className="btn-primary">
            back to tours
          </AniLink>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  padding: 4rem 0;

  .center {
    width: 95vw;
    max-width: 1170vw;
    margin: 0 auto;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-column-gap: 50px;
    grid-row-gap: 1rem;
    margin-bottom: 2rem;
  }

  .image {
    box-shadow: var(--lightShadow);
  }

  .template h2 {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 1rem;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
  }

  .info p {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    text-transform: capitalize;
  }

  .icon {
    color: var(--primaryColor);
    font-size: 1.4rem;
    margin-right: 0.5rem;
  }

  .desc {
    width: 70vw;
    line-height: 2;
  }

  .template h4 {
    text-transform: capitalize;
  }

  .template h2 {
    margin: 2rem 0;
  }

  .journey {
    width: 70vw;
    margin: 3rem 0;
  }
`;

export const query = graphql`
  query($slug: String!) {
    contentfulTour(slug: { eq: $slug }) {
      name
      price
      days
      images {
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
      start(formatString: "dddd MMMM Do, YYYY")
      journey {
        day
        info
      }
      description {
        description
      }
    }
  }
`;

export default Template;
