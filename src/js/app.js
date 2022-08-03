/* eslint-disable no-undef */
import {settings, select, templates, className} from './settings.js';
import utils from './utils.js';


const app = {
  initFlicker: function() {
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true
    })},
    
  
  initData: function() {
    // console.log(templates.product);
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
      });
      
  },

  initPage: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log(thisApp.navLinks);
  },

  initAbout(){
    const thisApp = this;

    const generatedHTML = templates.about();
    thisApp.aboutElement = utils.createDOMFromHTML(generatedHTML);
    const aboutContainer = document.querySelector(select.containerOf.home);
    console.log(aboutContainer);
    aboutContainer.appendChild(thisApp.aboutElement);
  },


  init: function(){
    const thisApp = this;
    thisApp.initPage();
    thisApp.initFlicker();
    thisApp.initData();
    thisApp.initAbout();
  },
};


app.init();
