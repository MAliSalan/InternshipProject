const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const arkaplan_modu = document.querySelector(".arkaplan_modu");

menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})
arkaplan_modu.addEventListener('click', () =>{
  document.body.classList.toggle('dark-theme');
  arkaplan_modu.querySelector('span:nth-child(1)').classList.toggle('active');
  arkaplan_modu.querySelector('span:nth-child(2)').classList.toggle('active');
})
function toggleAnalizMenu() {
  var analizMenu = document.getElementById('analizMenu');
  if (analizMenu.style.display === 'none' || analizMenu.style.display === '') {
      analizMenu.style.display = 'block';
  } else {
      analizMenu.style.display = 'none';
  }
}
