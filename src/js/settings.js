export const settings = {
  db: {
    url: '//localhost:3131',
    products: 'products',
  },
};

export const select = {
  templateOf: {
    about: '#template-about-page',
    product: '#template-products-page',
    contact: '#template-contact-page',
  },

  containerOf: {
    home: '#home-wrapper',
    products: '#products-list',
    contact: '#contact-wrapper',
    pages: '#pages',
  },

  nav: {
    links: '.header-nav a',
  }
};

export const className = {
  active: 'active',
};

export const templates = {
  about: Handlebars.compile(document.querySelector(select.templateOf.about).innerHTML),
  product: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
};