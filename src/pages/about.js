import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Head from 'components/head';

const About = ({ data }) => {
  const { title } = data.allFile.edges[0].node.childContentJson;
  return (
    <Layout>
      <Head pageTitle={title} />
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export default About;

export const query = graphql`
  query AboutQuery {
    allFile(filter: { name: { eq: "about" } }) {
      edges {
        node {
          childContentJson {
            title
          }
        }
      }
    }
  }
`;
