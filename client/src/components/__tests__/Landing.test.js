import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing'

it('shows the Landing Page', () => {
  const wrapped = shallow(<Landing />)
  expect(wrapped.find('Landing Page')).toBeTruthy();
});