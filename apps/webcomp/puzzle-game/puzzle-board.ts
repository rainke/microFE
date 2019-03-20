import { LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';

interface BoxData {
  index: number;
}
type LocationData = BoxData | null;
export const tag = 'puzzle-board';
@customElement(tag)
export default class MyElement extends LitElement {
  static get styles() {
    return css`
      :host .board {
        width: 400px;
        height: 400px;
        background: var(--bg-color, #eee);
        position: relative;
        margin: auto;
      }
    `;
  }
  @property() list :BoxData[] = (new Array(16).fill(1).map((_, index) => ({index}))).sort((a, b) => Math.random()- 0.5)
  get nullIndex () {
    return this.list.findIndex(item => item.index === 15);
  }

  getRight(idx:number) {
    if(idx % 4 !== 3) {
      return this.list[idx + 1];
    }
  }

  getLeft(idx: number) {
    if(idx % 4 > 0) {
      return this.list[idx - 1];
    }
  }

  getTop(idx: number) {
    if(idx > 3) {
      return this.list[idx - 4];
    }
  }

  getBottom(idx: number) {
    if(idx < 12) {
      return this.list[idx + 4];
    }
  }

  isNearNull(idx: number) {
    return [this.getLeft(idx), this.getRight(idx), this.getTop(idx), this.getBottom(idx)].some(item => Boolean(item && item.index === 15));
  }
  async handleClick(e: CustomEvent) {
    if(this.isNearNull(e.detail.index)) {
      const idx: number = e.detail.index;
      this.list[this.nullIndex] = this.list[idx];
      this.list[idx] = {index: 15};
      await this.requestUpdate();
      
    }
  }

  updated() {
    if(this.list.map(item => item ? item.index : '').join('') === '01234567891011121314') {
      alert('you win!')
    }
  }
  render() {
    return html`<div class="board">
      ${this.list.map((item, index) => html`
        <puzzle-box key=${item.index} @click-box=${this.handleClick} index=${item.index} loc=${index}></puzzle-box>
      `)}
    </div>`;
  }
}


