import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../assets/svg/logo.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="home">
      <section className="logo">
        <Logo />
      </section>
      <h2 data-testid="hero-title">Coming Soon</h2>
    </section>
  </Layout>
);

export default IndexPage;
