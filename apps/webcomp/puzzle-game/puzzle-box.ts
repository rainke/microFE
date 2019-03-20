import { LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';

export const tag = 'puzzle-box';
@customElement(tag)
export default class MyElement extends LitElement {
  static get styles() {
    return css`
      :host .box {
        width: 80px;
        height: 80px;
        background: var(--box-color, #fff);
        position: absolute;
        box-shadow: 5px 5px 5px #999;
        left: 10px;
        top: 10px;
        text-align: center;
        line-height: 80px;
        transition: all .5s ease;
      }
    `;
  }
  @property({type: Number}) index: number = 0
  @property({type: Number}) loc: number = 0
  handleClick() {
    this.dispatchEvent(new CustomEvent('click-box', {detail: {index: this.loc}}))
  }

  shouldUpdate(p: any) {
    return true;
  }
  render() {
    const column = Math.floor(this.loc / 4);
    const row = this.loc % 4;
    return html`
      <div
        class="box"
        @click=${this.handleClick}
        style="transform: translate(${100 * row }px, ${100 * column }px)"
      >${this.index+1}</div>
    `;
  }
}
