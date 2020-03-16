"use strict";
 

const count = document.querySelector('.glass__count--js');
const add = document.querySelector('.button__add--js') ;
const remove = document.querySelector('.button__remove--js');
const scoreyesterday = document.querySelector('.glass__count-2--js');
const scoretoday = document.querySelector('.table__b--js');
const water = document.querySelector('.glass__water')
const key = new Date().toISOString().slice(0, 10)
/*const dayb = document.querySelector('.table__yesterday--js');
const day = document.querySelector('.table__today--js');*/
 
if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0);
  count.innerHTML = "0";
   
}
else {
  count.localStorage = localStorage.getItem(key);
  count.innerHTML = localStorage.getItem(key);
   
  
} 
function waver(){
   water.classList.add("glass__water--active")
   setTimeout(waver,1000)
}
 

add.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
  count.innerHTML = localStorage.getItem(key); 
  waver()
  const clearClass = () => water.classList.remove("glass_water--active");
  setTimeout(() => clearClass(), 1000)
})
 
 
remove.addEventListener('click', (e) => {
  e.preventDefault();
  const value = parseInt(count.innerHTML);
  if (value > 0) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1)
    count.innerHTML = localStorage.getItem(key);
  }
 

})












