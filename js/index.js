const btnMenu = document.querySelector('.burger-img'),
    btnMenuClose = document.querySelector('.burger-img__close'),
    mobMenuContent = document.querySelector('.header-menu__mobile')


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
btnMenuClose.addEventListener('click', hideMobileMenu)

