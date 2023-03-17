// Menu
const btnMenu = document.querySelector('.burger-img'),
    btnMenuClose = document.querySelector('.burger-img__close'),
    mobMenuContent = document.querySelector('.header-menu__mobile')
const menuElements = document.querySelectorAll('.header-menu__mobile ul')


function showMobileMenu(){
    mobMenuContent.style.display = "flex"
    btnMenuClose.style.display = 'block'
    btnMenu.style.display = 'none'

    document.body.style.overflow = 'hidden'
}
function hideMobileMenu(){
    mobMenuContent.style.display = "none"
    btnMenuClose.style.display = 'none'
    btnMenu.style.display = 'block'

    document.body.style.overflow = 'visible'
}
btnMenu.addEventListener('click', showMobileMenu)
menuElements.forEach((i)=> i.addEventListener('click', hideMobileMenu))
btnMenuClose.addEventListener('click', hideMobileMenu)


// Pgress bar
window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY
    const documHeight = document.body.offsetHeight
    const windHeight = window.innerHeight
    const scrollPer = scrollTop / (documHeight - windHeight)
    const scrollPerRound = Math.round(scrollPer * 100)
  
    document.querySelector(".progress-bar").style.width = scrollPerRound + "%"
})


// User Move
const timeoutId = setTimeout(function() {
  const result = confirm('Пройшло 60 секунд бездіяльності на сторінці! Ви ще тут?');

  if (!result) {
    window.close();
  }
}, 60000);

window.addEventListener('mousemove', function() {
  clearTimeout(timeoutId);
});