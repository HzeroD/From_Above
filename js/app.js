//-----------------------Constants--------------------------
const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had their soldiers and investigators at the landing site. The object left all whom laid sight on it mesmerized, for it was crystalline and glowed a blueish white light.",

"As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd go chrystaline themselves. The horror spread throughout the camp.",

"Throughout the world many had the appearance of a mark on their right wrist, a few others on their left."


]

//-------------------------Variables------------------------
let introIdx

//----------------------Cached Element References---------------


const introDiv = document.querySelector(".card")
const sliderBtns = document.querySelector(".btn-group")
const buttons = document.querySelectorAll(".btn")




//-----------------------Event Listener----------------------
introDiv.addEventListener('click',(evt)=>{
    introDiv.innerText = introStory
})
sliderBtns.addEventListener('click',(evt) => {
    if(evt.target.class === '.btn-danger'){
        introDiv.innerText = introStory.index
    }
})

//------------------------Functions--------------------------



    sliderBtns.addEventListener('click',(evt) => {
        if(evt.target.class === '.btn-danger' && introIdx != 0){
            introDiv.innerText = introStory[introIdx]
            i -= 1
        }

    })



