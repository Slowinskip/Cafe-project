/* eslint-disable no-undef */
import {settings, select, templates, className} from './settings.js';
import utils from './utils.js';


const app = {
  initFlicker: function() {
    var elem = document.querySelector('.main-carousel');
    // eslint-disable-next-line no-unused-vars
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      autoPlay: 5000,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: false,
      pauseAutoPlayOnHover: false
    });},
    
  
  initData: function() {
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
        thisApp.initProduct();
      });
    
  },

  initPage: function(){
    const thisApp = this;


    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    for(let clickedElement of thisApp.navLinks){
      clickedElement.addEventListener('click', function(){
        event.preventDefault();
        thisApp.clickId = clickedElement.getAttribute('href').replace('#','');
        const find = document.querySelector('#' + thisApp.clickId);
        console.log(thisApp.clickId);
        thisApp.products = document.querySelector('#products');
        thisApp.home = document.querySelector('#home');
        thisApp.contact = document.querySelector('#contact');

        // eslint-disable-next-line no-unused-vars
        for(let pages of thisApp.pages){
          if(thisApp.clickId === 'home'){

            thisApp.products.classList.add(className.active);
            thisApp.home.classList.add(className.active);
            thisApp.contact.classList.remove(className.active);

          }
          if(thisApp.clickId == 'products'){
            find.classList.add(className.active);
            thisApp.home.classList.remove(className.active);
            thisApp.contact.classList.remove(className.active);

          }if(thisApp.clickId == 'contact'){
            find.classList.add(className.active);
            thisApp.home.classList.remove(className.active);
            thisApp.products.classList.remove(className.active);

          }
        }

        
      });
    
    }

  },

  initAbout: function(){
    const thisApp = this;

    const generatedHTML = templates.about();
    thisApp.aboutElement = utils.createDOMFromHTML(generatedHTML);
    const aboutContainer = document.querySelector(select.containerOf.home);
    aboutContainer.appendChild(thisApp.aboutElement);
  },
  initTitle: function(){
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if(randomNumber == 1){
      const generatedHTML = templates.titleOne();
      const createDOM = utils.createDOMFromHTML(generatedHTML);
      const container = document.querySelector(select.containerOf.title);
      container.appendChild(createDOM);
    }if(randomNumber == 2){
      const generatedHTML = templates.titleTwo();
      const createDOM = utils.createDOMFromHTML(generatedHTML);
      const container = document.querySelector(select.containerOf.title);
      container.appendChild(createDOM);
    }if(randomNumber == 3){
      const generatedHTML = templates.titleTree();
      const createDOM = utils.createDOMFromHTML(generatedHTML);
      const container = document.querySelector(select.containerOf.title);
      container.appendChild(createDOM);

    }
  },


  initProduct: function(){
    const thisApp = this;
      
    
    const generatedHTML = templates.product(thisApp.data.products);
    const createDOM = utils.createDOMFromHTML(generatedHTML);
    const container = document.querySelector(select.containerOf.products);
    container.appendChild(createDOM);
  },

  initContact: function(){
    const generatedHTML = templates.contact();
    const createDOM = utils.createDOMFromHTML(generatedHTML);
    const container = document.querySelector(select.containerOf.contact);
    container.appendChild(createDOM);

  },

  initFirstVisit: function() {
    
    const activeProduct = document.querySelector('#products');
    const activeProduct1 = document.querySelector('#home');
    activeProduct.classList.add(className.active);
    activeProduct1.classList.add(className.active);

  },

  init: function(){
    const thisApp = this;
    thisApp.initData();
    thisApp.initFirstVisit();
    thisApp.initTitle();
    thisApp.initPage();
    thisApp.initAbout();
    thisApp.initFlicker();
    
    thisApp.initContact();
    

    
  },
};


app.init();
