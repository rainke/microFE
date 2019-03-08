import './my-element';

const link = document.querySelector('link[rel="import"]') as HTMLLinkElement;
if(link) {
    const content = link.import;
    if(content) {
        const el = content.querySelector('.warning');
        el && document.body.appendChild(el.cloneNode(true));
    }
}
