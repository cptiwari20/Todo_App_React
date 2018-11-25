import React from 'react';
import { shallow } from 'enzyme'
import ConnectHeader, {Header} from '../Header';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
  wrapped = shallow(
    <Root>
      <ConnectHeader />
    </Root>
  )
});

it('has a list', () => {
  // console.log(wrapped.find('Header').dive())
  console.log(wrapped.debug())
})