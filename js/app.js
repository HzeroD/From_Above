//-----------------------Constants--------------------------
const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had their soldiers and investigators at the landing site. The object left all whom laid sight on it mesmerized, for it was crystalline and glowed a blueish white light.",

"As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd turn to chrystal themselves. The horror spread throughout the camp and the news made its way back home quickly.",

"Many throughout the land had the appearance of a mark on their right wrist, a few others on their left. Those marked right were endowed with gifts---heightened intelligence, enhanced perception, and unusual physical endurance"


]

const theGreatArray = [
    
]

//-------------------------Variables------------------------
let introIdx = 0

//----------------------Cached Element References---------------


const introDiv = document.querySelector(".carousel-inner")
const sliderBtns = document.querySelector(".btn-group")
const buttons = document.querySelectorAll(".btn")




//-----------------------Event Listener----------------------
introDiv.addEventListener('click',(evt)=>{
    introDiv.innerText = introStory[0]
})
sliderBtns.addEventListener('click',(evt) => {
    if(evt.target.class === '.btn-danger' && introIdx != 0){
        introDiv.innerText = introStory[introIdx - ]
    }
})

sliderBtns.addEventListener('click',(evt) => {
    if(evt.target.class === '.btn-danger' && introIdx != 0){
        introDiv.innerText = introStory[introIdx]
        i -= 1
    }

})

//------------------------Functions--------------------------



    function introSlider(evt) {
        evt.this.index = 
    }





