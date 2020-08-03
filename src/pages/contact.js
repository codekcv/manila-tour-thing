import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import Contact from '../components/Contact/Contact';
import SEO from '../components/SEO';

export default ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <Hero img={data.rotary.childImageSharp.fluid} />
    <Contact />
  </Layout>
);

export const query = graphql`
  query {
    rotary: file(relativePath: { eq: "rotary.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
