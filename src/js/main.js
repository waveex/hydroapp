"use strict";

// service worker registration - remove if you're not going to use it

const count = document.querySelector('.glass__count');
const add = document.querySelector('.button__add--js') ;
const remove = document.querySelector('.button__remove--js');
const scoreyesterday = document.querySelector('.table__a--js');
const scoretoday = document.querySelector('.table__b--js');
const dayb = document.querySelector('.table__yesterday--js');
const day = document.querySelector('.table__today--js');
const key = new Date().toISOString().slice(0, 10)

 
if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  count.innerHTML = "0"
}
else {
  count.localStorage = localStorage.getItem(key);
  count.innerHTML = localStorage.getItem(key);
  scoretoday.innerHTML = localStorage.getItem(key)
} 

   
 





add.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  count.innerHTML = localStorage.getItem(key);
  scoretoday.innerHTML = localStorage.getItem(key);
})


remove.addEventListener('click', (e) => {
  e.preventDefault();
  const value = parseInt(count.innerHTML);
  if (value > 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1)
    count.innerHTML = localStorage.getItem(key);
  }
  scoretoday.innerHTML = localStorage.getItem(key);

})












