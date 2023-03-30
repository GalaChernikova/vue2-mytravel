// mobile nav
const closeBtn = document.getElementById('closeBtn');
const openBtn = document.getElementById('menu')
const mobMenu = document.querySelector('.mobile-nav');

openBtn.addEventListener('click', function(){
  mobMenu.classList.add('active');
})

closeBtn.addEventListener('click', function(){
  mobMenu.classList.remove('active');
})