//Contact Form

const lastnameInput = document.querySelector('.contact-form__lastname')
const nameInput = document.querySelector('.contact-form__name')
const emailInput = document.querySelector('.contact-form__email')
const btnSubmit = document.querySelector('.contact-form button')
const popup = document.querySelector('.popup-contacts')
const popupName = document.querySelector('.popup-contacts .name')
const popupDate = document.querySelector('.popup-contacts .date')
const popupClose = document.querySelector('.popup-contacts__block .close')
let res = '';

function loader(waitTime){
    const loader = document.querySelector('.loader-container');
    loader.classList.add('show');
    loader.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    setTimeout(function() {
        document.body.style.overflow = ''
        loader.classList.remove('show');
        loader.style.display = 'none'
    }, waitTime);
}
window.onload = loader(2000)

nameInput.addEventListener('input', ()=> {nameInput.value = capitalizeFirstLetter(nameInput.value)})
lastnameInput.addEventListener('input', ()=> {lastnameInput.value = capitalizeFirstLetter(lastnameInput.value)})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
function pushLocalPerson(){
    const person = {
        nameInput: nameInput.value,
        lastnameInput: lastnameInput.value,
        emailInput:emailInput.value
    }

    localStorage.setItem('userName', JSON.stringify(person))    
    res = JSON.parse(localStorage.getItem('userName'))
    setTimeout(()=>{
        nameInput.value = ''
        lastnameInput.value = ''
        emailInput.value = ''
    }, 500)
}

btnSubmit.onclick = pushLocalPerson
btnSubmit.addEventListener('click', ()=>{
    if(res.nameInput){
        setTimeout(()=>{
            popup.style.display = 'flex'
            document.body.style.overflow = 'hidden'
            popupName.innerHTML += res.nameInput
            
            let month = new Date().getMonth() < 10 ? "0"+ new Date().getMonth() : new Date().getMonth()
            popupDate.innerHTML = new Date().getDate() +'.'+ month
            
        }, 5000)
    }
})
popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none'
    document.body.style.overflow = ''
    loader(5000)
})