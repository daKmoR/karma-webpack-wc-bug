import {
  expect,
} from '@open-wc/testing';

import '../foo-one.js';

describe('<karma-webpack-wc-bug>', () => {
  it('fake', async () => {
    expect(true).to.equal(true);
  });
});
