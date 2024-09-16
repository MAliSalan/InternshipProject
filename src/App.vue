
<template>

</template>

<script>
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
})
</script>
<style>
  @import 'assets/style.css';
</style>


