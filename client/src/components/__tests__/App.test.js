import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../Root'
import App from "../App";
import Header from '../Header';

let wrapped;
beforeEach(() => {
  wrapped = shallow(
    <Root>
      <App />
    </Root>)
})

it('shows the header', () => {
  expect(wrapped.find('div')).toBeTruthy();
  console.log(wrapped.find('div.container').length)
  expect(wrapped.find(Header)).toBeTruthy();
});