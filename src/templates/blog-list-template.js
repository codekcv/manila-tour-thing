import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';
import SEO from '../components/SEO';

const Blog = props => {
  const { currentPage, numPages } = props.pageContext;
  const { data } = props;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage =
    currentPage - 1 === 1 ? `/blogs/` : `/blogs/${currentPage - 1}`;

  const nextPage = `/blogs/${currentPage + 1}`;

  const blogCardArr = data.posts.edges.map(({ node }, index) => (
    <BlogCard key={`${node.id}${index}`} blog={node} />
  ));

  const linkArr = Array.from({ length: numPages }, (_, i) => (
    <AniLink
      key={`${data.posts.edges[i].node.slug}${i}`}
      fade
      to={`/blogs/${i === 0 ? '' : i + 1}`}
      className={i + 1 === currentPage ? 'link' : `link active`}
    >
      {i + 1}
    </AniLink>
  ));

  const prevLink = !isFirst && (
    <AniLink fade to={prevPage} className="link">
      prev
    </AniLink>
  );

  const nextLink = !isLast && (
    <AniLink fade to={nextPage} className="link">
      next
    </AniLink>
  );

  return (
    <Layout>
      <SEO title="Blogs" />
      <Container>
        <Title title="latest" subtitle="posts" />
        <div className="center">{blogCardArr}</div>
        <section className="links">
          {prevLink}
          {linkArr}
          {nextLink}
        </section>
      </Container>
    </Layout>
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

  .link {
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
    background: var(--primaryColor);
    color: var(--mainWhite);
    border: 2px solid var(--primaryColor);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    transition: var(--mainTransition);
    cursor: pointer;
  }

  .link:hover {
    background: transparent;
    color: var(--primaryColor);
  }

  .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          published(formatString: "MMMM Do, YYYY")
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

export default Blog;
