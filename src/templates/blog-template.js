import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../components/SEO';

const Blog = ({ data }) => {
  const {
    title,
    published,
    image,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      'embedded-entry-block': node => {
        const { images } = node.data.target.fields;
        console.log('nnn:', node);

        return (
          <div>
            <h1>this is the another post : </h1>
            <img
              width="400"
              src={images['en-US'][0].fields.file['en-US'].url}
              alt="blog"
            ></img>
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <SEO title={title} />

      <Container>
        <div className="center">
          <img width="400" src={image.file.url} alt="blog" />
          <h1>{title}</h1>
          <h4>published at : {published}</h4>

          <article className="post">
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 0 auto;
  }

  .post {
    margin: 2rem 0;
  }

  .post img {
    max-width: 70vw;
  }
`;

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      published(formatString: "MMMM Do, YYYY")
      image {
        file {
          url
        }
      }
      text {
        json
      }
    }
  }
`;

export default Blog;
