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


//Contact Form

const lastnameInput = document.querySelector('.contact-form__lastname')
const nameInput = document.querySelector('.contact-form__name')
const emailInput = document.querySelector('.contact-form__email')
const btnSubmit = document.querySelector('.contact-form button')
const popup = document.querySelector('.popup-contacts')
const popupName = document.querySelector('.popup-contacts .name')
const popupDate = document.querySelector('.popup-contacts .date')
const popupClose = document.querySelector('.popup-contacts__block .close')

nameInput.addEventListener('input', ()=> {nameInput.value = capitalizeFirstLetter(nameInput.value)})
lastnameInput.addEventListener('input', ()=> {lastnameInput.value = capitalizeFirstLetter(lastnameInput.value)})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
let res = '';
function pushLocalPerson(){
    const person = {
        nameInput: nameInput.value,
        lastnameInput: lastnameInput.value,
        emailInput:emailInput.value
    }

    localStorage.setItem('userName', JSON.stringify(person))    
    res = JSON.parse(localStorage.getItem('userName'))
}

btnSubmit.onclick = pushLocalPerson
btnSubmit.addEventListener('click', ()=>{
    setTimeout(()=>{
        popup.style.display = 'flex'
        document.body.style.overflow = 'hidden'
        popupName.innerHTML += res.nameInput
        
        let month = new Date().getMonth() < 10 ? "0"+ new Date().getMonth() : new Date().getMonth()
        popupDate.innerHTML = new Date().getDate() +'.'+ month
        
    }, 500)
})
popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none'
    document.body.style.overflow = ''
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