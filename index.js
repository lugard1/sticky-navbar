const navbarEl = document.querySelector('.navbar');
// console.log(navbarEl.offsetHeight)

const bottomContainerEl = document.querySelector('.bottom-container');
// console.log(bottomContainerEl.offsetTop)
window.addEventListener('scroll', ()=>{
  // console.log('window.scrollY')
  if(window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50){
    navbarEl.classList.add('active');
  } else {
    navbarEl.classList.remove('active');
  }
})