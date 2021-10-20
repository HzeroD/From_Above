const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had their soldiers and investigators at the landing site. The object left all whom laid sight on it mesmerized, for it was crystalline and glowed a blueish white light.",

"As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd turn to chrystal themselves. The horror spread throughout the camp and the news made its way back home quickly.",

"Many throughout the land had the appearance of a mark on their right wrist, a few others on their left. Those marked right were endowed with gifts---heightened intelligence, enhanced perception, and unusual physical endurance"


]

// const theGreatArray = [
// {storyline: ["All that you have is the clothes on your back, young one.","It has been an honor to tutor you and watch you grow so much, so fast. But you must choose now.", "Will you go down the left or the right path?"],
//  choices: ["I will go left", "I will go right"]

// },


const layerZeroStory = [
{storyline: ["Left it is then. Farewell. Be strong.","And so she went. The green, rolling hills of Galos were vast, and with the severely blue sky holding the absurdly radiant sun, the girl felt joy and optimism the likes of which surprised her.","The hours came and went but the girl looked forward without turning in the slightest. Until a quick, large shadow passed right through her: she looked up immediately. A drake! Impossible. But so it was, a dark purple, rough looking drake was coming down fast and there wasn't a place to hide in these vast open fields. The drake landed before her, his eyes locked on her with intent. What will the girl do?"],

choices: ["Talk to the beast", "Blast it with fire magic"]

}
]

const layerOneStory = [
{   //FAIL-CASE: DRAKE
    storyline: ["As she declared herself to the drake as Galos' representative in the Trials of Ora, speaking to the beast as if it were a man, the 20 feet tall monster extended its long neck and clamped its jaws on the child. Her death was instant."]
},
{   //MAGIC: DRAKE
    storyline:["The girl blasted the massive beast with fire square in its face. The drake shrieked and quickly moved backwards.", "The magic assault was steady and unrelenting, and so the drake took off quicker than when it landed. But there was a problem. It went straight in the direction of the mountains.Bold, decisive, and never one to back down, she marched on. Ready for anything.","It took three more hours to reach the foot of the mountain. Just like old man........"],

    choices: ["Climb the mountain", "Cross through tunnel"]
}]

const layerTwoStory = [
    {}, //STORY OVER

    {}, //STORY OVER

    {  //MOUNTAIN CLIMBER
        storyline: ["The mountain was nowhere near impossibly tall and during her training with Basil the Prophet she had climbed taller ones numerous times. Resting after two hours or so of climbing, a loud roar came from up ahead. "],
        choices: ["Ride the drake", "Kill the drake"]
    },

    {  //TUNNEL VENTURE
        storyline: ["And on she went with her torch at hand...."],
        choices: ["Use Ora's Sign", "Wait for help"]
    }


]




//-------------------------Variables------------------------------------------
let idxCurrent = 1
let idxNext = 0
let storyLayer 
let layerCount = 0
let choiceHolder = 0

//-------------------------Cached Element References----------------------
let introDiv = document.querySelector(".carousel-item")
let storyP = document.querySelectorAll(".text")
let sliderBtns = document.querySelector(".btn-group")
let button = document.querySelector(".btn-dark")
let audioEl = document.querySelector("audio")
let listEl = document.querySelectorAll(".list-group-item")

button.addEventListener('click',renderIntro)
sliderBtns.addEventListener('click',mainGameInit)
listEl = addEventListener('click',choiceLogic)




//Render our intro
function renderIntro(evt){
    

    for(let i = 0; i < storyP.length;i++){
    storyP[i].innerText = introStory[i]
    }
    console.log(storyP[1])
    button.style.display='none'

    audioEl.src = "/audio/Hollow Knight OST - Title Theme.mp3"
    
    
    
}

function mainGameInit(){

    // if(layerCount === 0) {
    //     storyLayer = layerZeroStory
    // } else if(layerCount === 1){
    //     storyLayer = layerOneStory
    // } else if(layerCount === 2){
    //     storyLayer = layerTwoStory
    // }
    storyLayer = layerOneStory
    for(let i = 0;i <storyP.length;i++){ 
        storyP[i].innerHTML = layerOneStory[1].storyline[i]
    }
    for(let i = 0;i<listEl.length;i++){
        listEl[i].innerHTML = layerOneStory[1].choices[i]
        listEl[i].style.background = "purple"
        listEl[i].style.color = "red"
    } 
    layerCount += 1

    
    audioEl.src = "/audio/Hollow Knight OST - Calm Greenpath (Extended).mp3"
    //audioEl.src = storyLayer[idxCurrent].music ACTUAL MUSIC FILE ACCESS STATEMENT(WILL IMPLEMENT LATER)



}

function choiceLogic(evt){
    // for(let i = 1; i <= idxCurrent; i++){
    //     idxNext += 2
    // }
    // idxCurrent = idxNext - 2  //ADJUSTER DUE TO POS AND IDX DIFFERENTIAL
    // let choiceHolder = parseInt(evt.target.id)
    // if(choiceHolder === 1){
    //     idxCurrent += 1
    // }

     for(let i = 0; i <= idxCurrent; i++){
         idxNext += 2
     }
     idxCurrent = idxNext
     
     choiceHolder = parseInt(evt.target.id)

     if(choiceHolder === 1){
         idxCurrent += 1
     }

    mainGameInit()

}






