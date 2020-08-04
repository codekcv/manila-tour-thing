import React from 'react';
import Image from 'gatsby-image';
import { FaMap } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const getImage = graphql`
  query {
    file(relativePath: { eq: "manila.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Tour = ({ tour }) => {
  const data = useStaticQuery(getImage);
  const img = data.file.childImageSharp.fluid;
  const { name, price, days, slug, images } = tour;
  const mainImage = images ? images[0].fluid : img;

  return (
    <Container>
      <div className="img-container">
        <Image className="img" fluid={mainImage} alt="single tour" />

        <AniLink className="link" fade to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>

      <div className="footer">
        <h3>{name}</h3>
        <div className="info">
          <h4 className="country">
            <FaMap className="icon" />
          </h4>
          <div className="details">
            <h6>{days} days</h6>
            <h6>from ₱{price}</h6>
          </div>
        </div>
      </div>
    </Container>
  );
};

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

const Container = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  .img-container {
    position: relative;
    background: var(--primaryColor);
    transition: var(--mainTransition);
  }

  .img {
    transition: var(--mainTransition);
  }

  .img-container:hover .img {
    opacity: 0.3;
  }

  .img-container:hover .link {
    opacity: 1;
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    color: var(--mainWhite);
    border: 2px solid var(--mainWhite);
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
  }

  .link:hover {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }

  .footer {
    padding: 1rem;
    text-align: left;
  }

  .footer h3 {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-transform: uppercase;
    align-items: center;
    margin-top: 0.5rem;
  }

  .info h6,
  .info h4 {
    margin-bottom: 0;
  }

  .country {
    text-transform: capitalize;
    color: var(--primaryColor);
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 0.4rem;
  }

  .details {
    color: var(--darkGrey);
    text-transform: uppercase;
    text-align: right;
  }
`;

export default Tour;
