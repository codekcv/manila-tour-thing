import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import BlogList from '../components/Blog/BlogList';
import SEO from '../components/SEO';

export default ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <Hero img={data.zoo.childImageSharp.fluid} />
    <BlogList />
  </Layout>
);

export const query = graphql`
  query {
    zoo: file(relativePath: { eq: "zoo.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
