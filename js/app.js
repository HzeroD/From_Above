const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had their soldiers and investigators at the landing site. The object left all whom laid sight on it mesmerized, for it was crystalline and glowed a blueish white light.",

"As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd turn to chrystal themselves. The horror spread throughout the camp and the news made its way back home quickly.",

"Many throughout the land had the appearance of a mark on their right wrist, a few others on their left. Those marked right were endowed with gifts---heightened intelligence, enhanced perception, and unusual physical endurance "


]








const layerZeroStory = [
    {storyline: ["Farewell. Be strong.","And so she went. The green, rolling hills of Galos were vast, and with the severely blue sky holding the absurdly radiant sun, the girl felt joy and optimism the likes of which surprised her.","The hours came and went but the girl looked forward without turning in the slightest. Until a quick, large shadow passed right through her: she looked up immediately. A drake! Impossible. But so it was, a dark purple, rough looking drake was coming down fast and there wasn't a place to hide in these vast open fields. The drake landed before her, his eyes locked on her with intent. What will the girl do?"],
    
    choices: ["Talk to the beast", "Blast it with fire magic"],
    
    music: "/audio/Hollow Knight OST - Calm Greenpath (Extended).mp3"
    
    }
    ]
    
    const layerOneStory = [
    {   //FAIL-CASE: DRAKE
        storyline: ["As she declared herself to the drake as Galos' representative in the Trials of Ora, speaking to the beast as if it were a man, the 20 feet tall monster extended its long neck and clamped its jaws on the child. Her death was instant.","G","B"],

        choices: ["Game","Over"],

        music: "/audio/Game_Over.mp3"

    },
    {   //MAGIC: DRAKE
        storyline:["The girl blasted the massive beast with fire square in its face. The drake shrieked and quickly moved backwards.", "The magic assault was steady and unrelenting, and so the drake took off quicker than when it landed. But there was a problem. It went straight in the direction of the mountains.Bold, decisive, and never one to back down, she marched on. Ready for anything.","It took three more hours to reach the foot of the mountain, where she found the wooden cabin surrounded by grazing sheep. Before she had a chance to knock the woman with the long black hair and the mark on the scar on her face came out, fully expecting the marked child. 'Ah, here you are, child! You must be exhausted. Come inside and rest up for the day.' The woman's name was Ingrid: slim, tall, pretty, and somehow old and young at once. After dinner the girl wondered out  "],
    
        choices: ["Climb the mountain", "Cross through tunnel"],

        music: "/audio/Drake_Roar.mp3"
    }]
    
    const layerTwoStory = [
        {}, //STORY OVER
    
        {}, //STORY OVER
    
        {  //MOUNTAIN CLIMBER
            storyline: ["The mountain was nowhere near impossibly tall and during her training with Basil the Prophet she had climbed taller ones numerous times. Resting after two hours or so of climbing, a loud roar came from up ahead. ","The girl was not one to ever back down and so with renewed strength she went on. 'ROAAARRR'- it was the drake. But the beast looked nowhere near as menacing as it had in the plains, though a drake is a drake, and any false move could mean death. It looked weak, but not not defeated.","After staring at each other for 10 eternal seconds, something in its demeanor shifted. It looked...welcoming. It was then that the girl remembered stories she had heard of drakes being beasts of honor, whom would submit to those stronger than itself. It turned its head away and layed on the floor, as if inviting the girl to get on it."],
            choices: ["Ride the drake", "Kill the drake"]
        },
    
        {  //TUNNEL VENTURE
            storyline: ["And on she went with her torch at hand....","",""],
            choices: ["Use Ora's Sign", "Wait for help"]
        }
    
    
    ]

const layerThreeStory = [
    {},
    {},
    {},
    {},
    {storyline: ["She slowly but assuredly moved close to the drake. Its breath tranquil, and its lids half closed, she grew bolder and then suddenly, in one aggressive move jumped on the base of its neck.",
"It roared and ascended with ease. Grabbing on to the short dark hairs on its neck and soaring through the sky made her feel strong, like destiny was on her side. "],

choices: ["Chuckle", "Keep your soic dignity"]
}
]

const layerZeroStoryA = [

]
    

//-------------------------Variables------------------------------------------

let storyLayer
let idxCurrent = 0
let idxNext = 0

let layerCount = 0
let choiceHolder = 0

//-------------------------Cached Element References----------------------
let introDiv = document.querySelector(".carousel-item")
let storyP = document.querySelectorAll(".text")
let sliderBtns = document.querySelector(".btn-group")
let button = document.querySelector(".btn-dark")
let audioEl = document.querySelector("audio")
let listEl = document.querySelectorAll(".list-group-item")
let listEl2 = document.querySelector(".choices")

//-------------------------Event Listeners------------------------------
button.addEventListener('click',init)
sliderBtns.addEventListener('click',mainGameInit)
listEl2.addEventListener('click',choiceLogic)



function init(){
    idxCurrent = 0
    idxNext = 0
    layerCount = 0 
    choiceHolder = 0


    renderIntro()
}


//Render our intro
function renderIntro(){
    

    for(let i = 0; i < storyP.length;i++){
    storyP[i].innerText = introStory[i]
    }
    console.log(storyP[1])
    button.style.display='none'

    audioEl.src = "/audio/Hollow Knight OST - Title Theme.mp3"
    
   
    
}




function mainGameInit(){
sliderBtns.style.display='none'
if(layerCount === 0){
    storyLayer = layerZeroStory
    layerCount += 1
 }
 else if(layerCount === 1){
storyLayer = layerOneStory
layerCount += 1
 
} else if(layerCount === 2){
storyLayer = layerTwoStory
layerCount += 1
} else if(layerCount === 3){
    storyLayer = layerThreeStory
    layerCount += 1
}
for(let i = 0;i <storyP.length;i++){ 
    storyP[i].innerHTML = storyLayer[idxCurrent].storyline[i]
}
for(let i = 0;i<listEl.length;i++){
    listEl[i].innerText = storyLayer[idxCurrent].choices[i]
    // listEl[i].style.background = "purple"
    // listEl[i].style.color = "red"
} 





audioEl.src = storyLayer[idxCurrent].music 

}

function choiceLogic(evt) {
    idxNext = 0
    for(let i = 0; i <= idxCurrent; i++){
        idxNext += 2
    }
    idxNext -= 1 //Offset to fit with indexing
    idxCurrent = idxNext 
    
    //The following determines whether we went left or right
    choiceHolder = parseInt(evt.target.id)
    
    if(choiceHolder === 0){
        idxCurrent -= 1
    }

    console.log(idxCurrent)

    mainGameInit()
}


function gameOver(){
    
}











