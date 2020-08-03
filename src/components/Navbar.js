import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import styled from 'styled-components';

const Navbar = () => (
  <Container>
    <div className="nav-center">
      <div className="nav-header">
        <h1>Manila Tour Thing!</h1>
      </div>

      <ul className="nav-links">
        {links.map((item, index) => (
          <li key={index}>
            <AniLink fade to={item.path}>
              {item.text}
            </AniLink>
          </li>
        ))}
      </ul>

      <div className="nav-social-links">
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
    </div>
  </Container>
);

const Container = styled.div`
  padding: 0 2rem;

  .nav-center {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 1rem 1.25rem; */
    transform: translateY(0.7rem);
    cursor: default;
  }

  .nav-links {
    display: flex;
    list-style-type: none;
    transition: var(--mainTransition);
    height: auto;
    overflow: hidden;
  }

  .nav-links a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    font-weight: bold;
    letter-spacing: var(--mainSpacing);
  }

  .nav-links a:hover {
    color: var(--primaryColor);
  }

  .nav-links {
    height: auto;
    display: flex;
  }

  .nav-social-links {
    display: flex;
    line-height: 0;
  }

  .nav-social-links a {
    color: var(--primaryColor);
    margin: 0 0.5rem;
    font-size: 1.2rem;
    transition: var(--mainTransition);
  }

  .nav-social-links a:hover {
    color: var(--mainBlack);
    transform: translateY(-5px);
  }
`;

export default Navbar;
