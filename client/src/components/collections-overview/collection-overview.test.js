import React from 'react';
import { shallow } from 'enzyme';

import { CollectionOverview } from './collections-overview.components';

it('should render CollectionOverview component', () => {
  expect(shallow(<CollectionOverview collections={[]}/>)).toMatchSnapshot();
}); 