import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import Hero from '../components/Hero';
import { graphql } from 'gatsby';
import FeaturedTours from '../components/Home/FeaturedTours';
import SEO from '../components/SEO';
import { setConfig } from 'react-hot-loader';
setConfig({ logLevel: 'debug' });

export default ({ data }) => (
  <Layout>
    <SEO title="Home" description="this is description" />

    <Hero home="true" img={data.manila.childImageSharp.fluid}>
      <Banner
        title="Epic Adventures Awaits!"
        info="A tour stuff by Christian for Q3 90901 1st Deliverable "
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </Hero>

    <About />
    <Services />
    <FeaturedTours />
  </Layout>
);

export const query = graphql`
  query {
    manila: file(relativePath: { eq: "manila.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
