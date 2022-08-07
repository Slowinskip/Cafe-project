export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  templateOf: {
    about: '#template-about-page',
    product: '#template-products-page',
    contact: '#template-contact-page',
    titleOne: '#template-title-1',
    titleTwo: '#template-title-2',
    titleTree: '#template-title-3',

    
  },

  containerOf: {
    home: '#home-wrapper',
    products: '#products-list',
    contact: '#contact-wrapper',
    pages: '#pages',
    title: '#header-sub-title'
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
  titleOne: Handlebars.compile(document.querySelector(select.templateOf.titleOne).innerHTML),
  titleTwo:Handlebars.compile(document.querySelector(select.templateOf.titleTwo).innerHTML),
  titleTree:Handlebars.compile(document.querySelector(select.templateOf.titleTree).innerHTML),

};