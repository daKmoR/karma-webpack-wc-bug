import './foo-one.js';

window.customElements.define('foo-two', class extends HTMLElement {
  constructor() {
    super();
    this.foo = 'two';
  }

  connectedCallback() {
    this.foo = 'two-connected';
  }

  // eslint-disable-next-line class-methods-use-this
  loadTranslations() {
    return import('./en.js').then((module) => {
      // console.log(module.default);
      this.foo = module.default.foo;
    });
  }
});
