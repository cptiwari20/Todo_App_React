import React from 'react';
import { shallow, mount } from 'enzyme';
import Root from '../../Root'
import ConnectApp, { App } from "../App";
import {Header} from '../Header';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <Root initialState={{auth: {}}}>
      <ConnectApp  />
    </Root>
    );
})
it('have a connectApp HOC with Component', () => {
  expect(wrapper.find('Connect(App)').length).toEqual(1);
  expect(wrapper.find(ConnectApp).length).toEqual(1)
});

it.only('only have App component', () => {
  expect(wrapper.find('App').length).toEqual(1)
})
