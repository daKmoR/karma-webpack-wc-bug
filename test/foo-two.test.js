import {
  expect,
} from '@open-wc/testing';

import '../foo-two.js';

describe('<karma-webpack-wc-bug>', () => {
  it('has foo as two', async () => {
    const foo = document.createElement('foo-two');
    expect(foo.foo).to.equal('two');
  });
});
