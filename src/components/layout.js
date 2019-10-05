/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/core';

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            background-color: #404d56;
            margin: 0;
            color: #82ccdc;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 14px;
            line-height: 1.4;

            @media (min-width: calc(550px + 10vw)) {
              font-size: 18px;
            }

            > div {
              margin-top: 0;
            }

            > div,
            > div > div {
              height: 100%;
            }
          }
          .page {
            display: flex;
            flex-direction: column;
            height: 100vh;
            padding: 20px 20px 0;

            .logo {
              margin-top: 60px;
            }

            h2 {
              text-align: center;
            }
          }

          .page main .imprint,
          .page main .data-privacy {
            h2,
            h3,
            h4,
            p {
              color: #c3e4ec;
              text-align: left;
              word-break: break-word;
            }
            h2 {
              font-size: 1.75rem;
            }
            .backlink {
              font-size: 1em;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            line-height: 1.1;
            font-family: 'Raleway', Helvetica, Arial, sans-serif;

            + * {
              margin-top: 0.5rem;
            }
          }

          h2 {
            font-size: 2.75rem;
            font-weight: 100;
          }

          a {
            color: #82ccdc;
            text-decoration: none;
            cursor: pointer;
            font-size: 1.25em;
            &:hover {
              text-decoration: underline;
            }
          }

          p > a {
            font-size: 1em;
          }
          main {
            flex: 1 0 auto;
          }

          footer {
            margin-bottom: 30px;
            flex-shrink: 0;
            nav {
              padding: 0;
              text-align: center;
            }
            ul {
              display: inline-block;
              list-style-type: none;
              padding: 0;
              li {
                display: inline-block;
                margin-right: 20px;
                &:last-child {
                  margin-right: 0;
                }
              }
            }
          }

          svg {
            width: 100%;
          }

          @media only screen and (min-width: 768px) {
            .page {
              margin: 0 auto;
              width: 80vw;
            }
            h2 {
              font-size: 3.75rem;
            }
            .page main .imprint,
            .page main .data-privacy {
              h2 {
                font-size: 2.75rem;
                margin-bottom: 30px;
              }
            }
          }
        `}
      />
      <div className="page">
        <main>{children}</main>
        <footer>
          <nav data-testid="footer-nav">
            <ul>
              <li>
                <Link to="/imprint/">Imprint</Link>
              </li>
              <li>
                <Link to="/data-privacy/">Data Privacy</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
