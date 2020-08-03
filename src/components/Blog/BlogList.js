import React from 'react';
import BlogCard from './BlogCard';
import Title from '../Title';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const getPosts = graphql`
  query {
    posts: allContentfulPost(sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          published(formatString: "MMMM, Do, YYYY")
          createdAt(formatString: "LLLL")
          title
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const BlogList = () => {
  const { posts } = useStaticQuery(getPosts);

  return (
    <Container>
      <Title title="our" subtitle="blogs" />

      <div className="center">
        {posts.edges.map(({ node }) => (
          <BlogCard key={node.id} blog={node} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 4rem 0;

  .center {
    width: 80vw;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

export default BlogList;
