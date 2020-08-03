import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Tours from '../components/Tours/Tours';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

export default ({ data }) => (
  <Layout>
    <SEO title="Tours" />
    <Hero img={data.rizal.childImageSharp.fluid} />
    <Tours />
  </Layout>
);

export const query = graphql`
  query {
    rizal: file(relativePath: { eq: "rizal.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
