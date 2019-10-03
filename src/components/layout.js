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
            height: 100%;

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
          .page,
          .page main .home,
          .page main .imprint,
          .page main .data-privacy {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            grid-gap: 50px;
            min-height: 100%;
          }

          .page main .imprint,
          .page main .data-privacy {
            grid-template-rows: 50px 100px 1fr;
            grid-template-columns: 20vw 1fr 20vw;
            h2,
            h3,
            h4,
            p {
              color: #c3e4ec;
            }
            .backlink {
              grid-column: 2/3;
              grid-row: 1/2;
              align-self: center;
              font-size: 1em;
            }
            h2 {
              grid-column: 2/3;
              grid-row: 2/3;
              justify-self: left;
              align-self: end;
            }
            .content {
              grid-column: 2/3;
              grid-row: 3/4;
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
            font-size: 3.25rem;
            font-weight: 100;
            grid-row: 2/3;
            justify-self: center;
            align-self: start;
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

          .logo {
            grid-row: 1/2;
            justify-self: center;
            align-self: end;
          }

          footer {
            justify-self: center;
            align-self: self-end;
            grid-row: 2/3;
            margin-bottom: 30px;

            ul {
              list-style-type: none;
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

          @media only screen and (min-width: 500px) {
          }

          @media only screen and (min-width: 600px) {
          }
        `}
      />
      <div className="page">
        <main>{children}</main>
        <footer>
          <nav>
            <ul>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
              <li>
                <Link to="/data-privacy">Data Privacy</Link>
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
