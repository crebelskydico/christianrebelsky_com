import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import NotFound from '../404';

describe('NotFound', () => {
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
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
