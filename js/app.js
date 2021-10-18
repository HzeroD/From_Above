// //-----------------------Constants--------------------------
// const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had their soldiers and investigators at the landing site. The object left all whom laid sight on it mesmerized, for it was crystalline and glowed a blueish white light.",

// "As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd turn to chrystal themselves. The horror spread throughout the camp and the news made its way back home quickly.",

// "Many throughout the land had the appearance of a mark on their right wrist, a few others on their left. Those marked right were endowed with gifts---heightened intelligence, enhanced perception, and unusual physical endurance"


// ]

// const theGreatArray = [

// ]

// //-------------------------Variables------------------------
// let introIdx = 0

// //----------------------Cached Element References---------------


// const introDiv = document.querySelector(".carousel-inner")
// const sliderBtns = document.querySelector(".btn-group")
// const buttons = document.querySelectorAll(".btn")




// //-----------------------Event Listener----------------------
// introDiv.addEventListener('click',(evt)=>{
//     introDiv.innerText = introStory[0]
// })
// sliderBtns.addEventListener('click',(evt) => {
//     if(evt.target.class === '.btn-danger' && introIdx != 0){
//         introDiv.innerText = introStory[introIdx - ]
//     }
// })

// sliderBtns.addEventListener('click',(evt) => {
//     if(evt.target.class === '.btn-danger' && introIdx != 0){
//         introDiv.innerText = introStory[introIdx]
//         i -= 1
//     }

// })

// //------------------------Functions--------------------------



//     function introSlider(evt) {
//         evt.this.index = 
//     }




const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had their soldiers and investigators at the landing site. The object left all whom laid sight on it mesmerized, for it was crystalline and glowed a blueish white light.",

"As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd turn to chrystal themselves. The horror spread throughout the camp and the news made its way back home quickly.",

"Many throughout the land had the appearance of a mark on their right wrist, a few others on their left. Those marked right were endowed with gifts---heightened intelligence, enhanced perception, and unusual physical endurance"


]

const theGreatArray = [
{storyLine1: ["Something something","the other the other", "So what is your choice?"],
 choices: ["I will go left", "I will go right"]

},

{storyLine1a: ["Fine then, left you go", "It's really not my problem","and so she went but on the way encountered a drake"],

 choices: ["Say hello", "Cast a fire spell"] //idx 0 LOSE CASE
},

//LOSE CASE
{storyLine1_x: ["The drake attacked her and her dying breath was cold as ice"],
status: 0
},

{
 storyLine1b: ["Best of travels, young one","On here way she found a boatman offering a ride across the river for 10 silvers", "Problem was, he looked...a bit sketchy"],

 choices: ["Cross river with boatman", "Cross the dinkity old bridge"]

},

{
 storyLine1b_a:["The boatman stank like death and made not conversation","We got to the other side and he gestured for me to go","I left carefully"],
 
}

]

//-------------------------Variables-------------------------
let leftTracker 
let rightTracker

let introDiv = document.querySelector(".carousel-item")
let storyP = document.querySelectorAll(".text")
let sliderBtns = document.querySelector(".btn-group")
let button = document.querySelector(".btn-dark")
let audioEl = document.querySelector("audio")
let listEl = document.querySelectorAll(".list-group-item")

button.addEventListener('click',renderIntro)
sliderBtns.addEventListener('click',mainGameInit)
listEl = addEventListener('click',)




//Render our intro
function renderIntro(evt){
    

    for(let i = 0; i < storyP.length;i++){
    storyP[i].innerText = introStory[i]
    }
    console.log(storyP[1])
    button.style.display='none'

    audioEl.src = "/audio/Hollow Knight OST - Title Theme.mp3"
    
    sliderBtns.addEventListener('click',mainGameInit)
    
}

function mainGameInit(){
    for(let i = 0;i < theGreatArray[0].storyLine1.length;i++){
        storyP[i].innerHTML = theGreatArray[0].storyLine1[i]
    }
    for(let i = 0;i< theGreatArray[0].choices.length;i++){
        listEl[i].innerHTML = theGreatArray[0].choices[i]
        listEl[i].style.background = "purple"
        listEl[i].style.color = "red"
    }

    

    audioEl.src = "/audio/Hollow Knight OST - Calm Greenpath (Extended).mp3"
}

function choiceLogic(){

}

