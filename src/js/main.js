"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


 const count = document.querySelector('.glass__count')
 
 const add = document.querySelector('.button__add--js')

/* const remove = document.querySelector('.button__remove--js')
add.addEventListener ('click', (e) => {
add.innerHTML.toggle('+1') 
}