import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../assets/svg/logo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="logo">
      <Logo />
    </section>
    <h2>Coming Soon</h2>
  </Layout>
);

export default IndexPage;
