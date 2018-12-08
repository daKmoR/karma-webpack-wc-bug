import {
  expect,
} from '@open-wc/testing';

import '../foo-one.js';

describe('foo-one', () => {
  it('fake', () => {

  });
  it('has foo as one', async () => {
    const foo = document.createElement('foo-one');
    expect(foo.foo).to.equal('one');
  });
});
