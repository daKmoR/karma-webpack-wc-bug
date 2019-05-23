window.customElements.define('foo-one', class extends HTMLElement {
  constructor() {
    super();
    this.foo = 'one';
  }

  connectedCallback() {
    this.foo = 'one-connected';
  }
});
