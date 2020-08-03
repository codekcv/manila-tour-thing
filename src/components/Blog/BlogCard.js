import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const BlogCard = ({ blog }) => {
  const { slug, title, image, published } = blog;

  return (
    <Container>
      <div className="img-container">
        <Image className="img" fluid={image.fluid} alt="single post" />

        <AniLink className="link" fade to={`/blog/${slug}`}>
          read more
        </AniLink>

        <h6 className="date">{published}</h6>
      </div>

      <div className="footer">
        <h4>{title}</h4>
      </div>
    </Container>
  );
};

const Container = styled.article`
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  .img-container {
    position: relative;
    background: var(--primaryColor);
    transition: var(--mainTransition);
  }

  .img-container:hover .link {
    opacity: 1;
  }

  .img {
    transition: var(--mainTransition);
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

  .date {
    position: absolute;
    left: 0;
    top: 75%;
    background: var(--primaryColor);
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  .footer {
    padding: 1rem;
    text-align: left;
  }

  .footer h4 {
    text-transform: capitalize;
    margin-bottom: 0;
  }
`;

export default BlogCard;
