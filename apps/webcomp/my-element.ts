import {LitElement, html, customElement, property, css, unsafeCSS } from 'lit-element';
import s from './my-element.css';

@customElement('my-element')
class MyElement extends LitElement {
    static get styles() {
        return unsafeCSS(s)
    }
    @property({type: String, reflect: true, attribute:'test', noAccessor: true}) foo = 'foo';
    render() {
        return html`
            <p>A paragraph, the foo is ${this.foo} </p>
        `
    }
}
console.dir(MyElement)