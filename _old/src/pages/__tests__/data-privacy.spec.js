import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery } from 'gatsby';
import DataPrivacy from '../data-privacy';

describe('DataPrivacy', () => {
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
    const tree = renderer.create(<DataPrivacy />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
