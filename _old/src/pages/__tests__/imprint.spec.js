import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import Imprint from '../imprint';

describe('Imprint', () => {
  beforeAll(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'Test Site',
          description: 'Test Description',
          author: 'Test Author',
        },
      },
    }));
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Imprint />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
