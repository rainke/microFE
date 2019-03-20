import { LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';

export const tag = 'my-element';
@customElement(tag)
export default class MyElement extends LitElement {
  // static get styles() {
  //     return unsafeCSS(s)
  // }
  @property({
    type: String,
    reflect: true,
    attribute: 'foo',
    converter: {
      toAttribute(value) {
        return value;
      }
    }
  })
  foo = 'foo';

  @property({
    type: Object,
    reflect: true
  })
  json = {};
  
  @property({
    type: Array,
    reflect: true
  })
  arr = [];
  @property({
    type: Boolean,
    reflect: true
  })
  bool = false;
  render() {
      console.log(this.arr)
    return html`
      <div>
        <p>the property <code>foo</code> is: ${this.foo}</p>
        <ul>the property <code>arr</code> is: ${
            this.arr.map(item => html`<li>${item}</li>`)
        }</ul>
        <p>thi property <code>bool</code> is : ${this.bool}</p>
        <p>thi property <code>json</code> is : ${JSON.stringify(this.json)}</p>
      </div>
    `;
  }
}
