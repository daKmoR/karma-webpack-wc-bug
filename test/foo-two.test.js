import {
  expect,
} from '@open-wc/testing';

import '../foo-two.js';

describe('<karma-webpack-wc-bug>', () => {
  it('fake', async () => {
    expect(true).to.equal(true);
  });
});
