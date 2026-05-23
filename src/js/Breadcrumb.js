export default class Breadcrumb {
  constructor({ category, type, count }) {
    this.category = category;
    this.type = type;
    this.count = count;
    this.render();
  }

  buildCrumbs() {
    const crumbs = [];
    crumbs.push({ label: 'Home', href: '../index.html' });

    if (this.type === 'list') {
      crumbs.push({ label: `${this.category} → (${this.count} items)`, href: null });
    } else if (this.type === 'detail') {
      crumbs.push({ label: this.category, href: null });
    }

    return crumbs;
  }

  render() {
    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Breadcrumb');
    nav.classList.add('breadcrumb');

    const ol = document.createElement('ol');
    ol.classList.add('breadcrumb__list');

    const crumbs = this.buildCrumbs();
    crumbs.forEach((crumb, index) => {
      const li = document.createElement('li');
      li.classList.add('breadcrumb__item');

      if (crumb.href) {
        const a = document.createElement('a');
        a.href = crumb.href;
        a.textContent = crumb.label;
        li.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.setAttribute('aria-current', 'page');
        span.textContent = crumb.label;
        li.appendChild(span);
      }

      if (index < crumbs.length - 1) {
        const sep = document.createElement('span');
        sep.classList.add('breadcrumb__sep');
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = '›';
        li.appendChild(sep);
      }

      ol.appendChild(li);
    });

    nav.appendChild(ol);
    const header = document.querySelector('header');
    header.insertAdjacentElement('afterend', nav);
  }
}