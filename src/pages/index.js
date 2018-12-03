import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const { title } = data.allFile.edges[0].node.childContentJson;
  return (
    <Layout>
      <Box>
        <Title as="h2" size="large">
          {title}
        </Title>
        <Modal>
          <video
            src="https://i.imgur.com/gzFqNSW.mp4"
            playsInline
            loop
            autoPlay
            muted
          />
        </Modal>
      </Box>
      <div style={{ height: '50vh' }} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    allFile(filter: { name: { eq: "home" } }) {
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
