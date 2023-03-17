import {planning, architecture, design} from '../json/services.js';

const blocks = document.querySelector('.service-content'),
    allBtn = document.querySelector('.all'),
    designBtn = document.querySelector('.design'),
    arhitectureBtn = document.querySelector('.arhitecture'),
    planningBtn = document.querySelector('.planning'),
    serviceBtns = document.querySelectorAll('.service-btns button')

const all = [
    design[design.length-1],
    architecture[architecture.length-1],
    planning[planning.length-1]
]

function renderContent(){
    if(allBtn.classList.contains('service-btns__active')){
        blocks.innerHTML =`${all.map(i=>(`<div class="service-content__block" key=${i.id} style="background: ${i.background}; color: ${i.background === '#CAA892' ? '#fff': '#212121'};">
            <div class="service-content__block--img">
                <img src="${i.img}" />    
            </div>
            <div class="service-content__block--desc">    
                <h6>${i.title}</h6>
                <p>${i.desc}</p>
            </div>
        </div>`))}`
    }else if(designBtn.classList.contains('service-btns__active')){
        blocks.innerHTML =`${design.map(i=>(`<div class="service-content__block" key=${i.id} style="background: ${i.background}; color: ${i.background === '#CAA892' ? '#fff': '#212121'};">
            <div class="service-content__block--img">
                <img src="${i.img}" />    
            </div>
            <div class="service-content__block--desc">    
                <h6>${i.title}</h6>
                <p>${i.desc}</p>
            </div>
        </div>`))}`
    }else if(arhitectureBtn.classList.contains('service-btns__active')){
        blocks.innerHTML =`${architecture.map(i=>(`<div class="service-content__block" key=${i.id} style="background: ${i.background}; color: ${i.background === '#CAA892' ? '#fff': '#212121'};">
            <div class="service-content__block--img">
                <img src="${i.img}" />    
            </div>
            <div class="service-content__block--desc">    
                <h6>${i.title}</h6>
                <p>${i.desc}</p>
            </div>
        </div>`))}`
    }else if(planningBtn.classList.contains('service-btns__active')){
        blocks.innerHTML =`${planning.map(i=>(`<div class="service-content__block" key=${i.id} style="background: ${i.background}; color: ${i.background === '#CAA892' ? '#fff': '#212121'};">
            <div class="service-content__block--img">
                <img src="${i.img}" />    
            </div>
            <div class="service-content__block--desc">    
                <h6>${i.title}</h6>
                <p>${i.desc}</p>
            </div>
        </div>`))}`
    }

    for(let i = 0; i < blocks.childNodes.length; i++)
        if(blocks.childNodes[i].data == ',')
            blocks.childNodes[i].data = ''
}
renderContent()

serviceBtns.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        serviceBtns.forEach((f)=>f.classList.remove('service-btns__active'))
        e.target.classList.toggle('service-btns__active')
        renderContent()
    })
})
