module.exports = {
  siteMetadata: {
    title: 'Christian Rebelsky - Front-End developer based in Hamburg',
    description: 'Freelance front-end developer based in Hamburg, Germany.',
    author: 'Christian Rebelsky',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Christian Rebelsk',
        short_name: 'christianrebelsky',
        description: 'Freelance front-end developer based in Hamburg, Germany.',
        start_url: '/',
        background_color: '#404d56',
        theme_color: '#404d56',
        display: 'minimal-ui',
        icon: 'src/assets/svg/logo.svg',
        include_favicon: false,
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway:100`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId:
          process.env.TARGET_ENV === 'prod' ? 'UA-45983054-3' : 'UA-45983054-6',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
