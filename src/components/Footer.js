import React from 'react';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <div className="links">
        {links.map((item, index) => (
          <AniLink fade key={index} to={item.path}>
            {item.text}
          </AniLink>
        ))}
      </div>

      <div className="icons">
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <div className="copyright">
        copyright &copy; manila tours thing {new Date().getFullYear()} all
        rights reserved
      </div>
    </Container>
  );
};

const Container = styled.footer`
  background: var(--mainBlack);
  margin-top: auto;
  padding: 2rem;
  text-align: center;
  color: var(--mainWhite);

  .links a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--mainWhite);
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
    font-weight: bold;
  }

  .links a:hover {
    color: var(--primaryColor);
  }

  .icons a {
    display: inline-block;
    margin: 1rem;
    font-size: 1.3rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }

  .icons a:hover {
    color: var(--primaryColor);
  }

  .copyright {
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    line-height: 2;
  }
`;

export default Footer;
