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
    </Root>);
})
it('shows the header', () => {
  expect(wrapped.find(Header).length).toEqual(1);
})