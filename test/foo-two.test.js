import {
  expect,
} from '@open-wc/testing';

import '../foo-two.js';

describe('foo-two', () => {
  it('has foo as two', async () => {
    const foo = document.createElement('foo-two');
    expect(foo.foo).to.equal('two');

    await foo.loadTranslations();
    expect(foo.foo).to.equal('is great');
  });
});
