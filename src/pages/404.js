import React from 'react';
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Banner from '../components/Banner';
import SEO from '../components/SEO';
import styled from 'styled-components';

const missing = () => {
  return (
    <Layout>
      <SEO title="Error" />

      <Container>
        <Banner title="oops it's a dead end">
          <AniLink fade to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </Container>
    </Layout>
  );
};

const Container = styled.header`
  background: var(--primaryColor);
  min-height: calc(100vh - 62px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default missing;
