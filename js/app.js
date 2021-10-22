const introStory = ["Seventy years ago a bright white light tore through the night sky, the event being witnessed by citizens from throughout the three kingdoms. The enourmous meteorite landed in the neutral Red Canyon desert and within a week Galos, Kravidgaya and Sino had soldiers and representatives at the landing site. The object entranced all whom laid eyes on it, for aside from its size it was crystalline and gave off a blueish white light. Many fragments of the giant fallen object were spread thoughout the kingdoms made their way throughout the kingdoms.",

"As many of the men approached, their skin began to dimly glow the color of the meteorite, after which they'd turn to chrystal themselves. Terror spread throughout the camps and news of the occurance quickly made its way throughout the kingdoms. The giant chrystalline object's fall produced many smaller fragments, spread throughout the three kingdoms. Many throughout the land had the sudden appearance of a mark on their right wrist, a few others on their left. Those marked right were endowed with gifts---heightened intelligence, enhanced perception, unusual physical endurance and some with the ability to manipulate the elements. Those marked left became known as Prophets, for soon enough only they would have answers to the many questions surrounding the object in Red Canyon. The soon to be Prophets began thrashing in their sleep, waking in cold sweats and in complete disorientation. Soon their night terrors turned to consistent dreams, and it became evident that not only was there meaning, but a message. \n 'The life inside the fallen chrystal calls itself Ora. Those with the right-mark must be made strong and returned to it once they come of age. This return of Ora's children will bring strength and prosperity.'  ", "It was Kravidgaya that returned the first three Children. A brutal war between the kingdom and Galos had raged for years, with the latter coming close to total victory. Three young generals of the Kravidgayan Mountain Riders, men of renown, and bearing the Mark ever since the night of the white light, presented themselves before the meteorite. These men did not turn to crystal, but into an incandescent white lights. First becoming one, and then being absorbed by Ora. The tide of the war turned within the day.  "




]




const layerZeroStory = [
    {storyline: ["Basil the Prophet had told the story many times, but it never bored her. As usual, she listened her characteristic blank stare.  'Today is the day. Head to the city of Amos and receive the Oric crystal from the man in red. It will give you the strength necessary for your pilgrimage to Red Canyon'. They stood at the outskirts of the town for many minutes in silence. 'Farewell child, it has been a pleasure'. ","And so she went. The green, rolling hills of Galos were vast, and with the severely blue sky holding the absurdly radiant sun, the girl felt joy and optimism the likes of which surprised her.","The hours came and went but the she looked ever forward , turning not in the slightest. Suddenly, a large shadow zoomed past her from up above: she looked up immediately. A drake! Impossible. But so it was, a dark purple, rough looking drake was coming down fast and there was not a place to hide in these vast open fields. The drake landed before her, its violent eyes locked on its prey with killing intent. What will the girl do?"],
    
    choices: ["Talk to the beast. There are stories of these beasts understanding human language...", "Blast it with fire magic. No time for games."],
    
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
        storyline:["The girl blasted the massive beast with fire square in its face. The drake shrieked and quickly moved backwards.", "The magic assault was steady and unrelenting, and so the drake took off quicker than when it landed. But there was a problem. It went straight in the direction of the mountains towards which she headed. Bold, decisive, and never one to back down, she marched on. Ready for anything.","It took another three hours to reach the foot of the mountain, where she spotted the wooden cabin surrounded by grazing sheep that Basil had mentioned. Before she had a chance to knock the woman black and long haired woman with the scar on her face emerged from the side of the cabin, fully expecting the marked child. 'Ah, here you are, child! You must be exhausted. Come inside and rest for the day.' The woman's name was Ingrid: slim, tall, pretty, and somehow old and young at once. After dinner the girl mentioned her encounter with the drake. Ingrid was astounded--last she saw a drake was over two decades ago, and none she has spoken to over the years have even mentioned the appearance of one. Her wooden cabin, dozens of sheep, and her very life were in danger. Surely the flying beast made its home near the mountain peak--it's their terrain of preference. 'Child, the pride of a drake can only be subdued through strength. You bearing Ora's mark on your wrist allowed you to face it and win, meaning you might be safe if you were to encounter it again. I on the other hand....'. It was a tense, sleepless night for the woman. The next morning the girl pepared  for the journey ahead. She was to take the tunnel highway which cut right through the mountain, getting her to Amos within a day. But she found it difficult to leave the situation as it was.'No child! Too much is at stake. Carry on with your business. I can handle myself well enough'. But the girl was stern, bordering on obstinate. And strong. Yes, strong. "],
    
        choices: ["Climb the mountain", "Cross through tunnel"],

        music: "/audio/Drake_Roar.mp3"
    }]
    
    const layerTwoStory = [
        {}, //STORY OVER
    
        {}, //STORY OVER
    
        {  //MOUNTAIN CLIMBER
            storyline: ["The mountain was nowhere near impossibly tall and during her training with Basil the Prophet she had climbed taller ones numerous times. Resting after three hours of climbing, a loud roar came from up ahead. ","The girl was not one to ever back down and so with renewed strength she went on. 'ROAAARRR'- it was the drake. The beast looked nowhere near as menacing as it had in the plains. But it was a drake after all, and any false move could mean death. It looked weak, but not not defeated.","After staring at each other for 10 eternal seconds, something in its demeanor shifted. It looked...welcoming. She recalled Ingrid's words. It turned its head away and layed gently on the ground, as if inviting the girl."],
            choices: ["Ride the drake...I am strong", "Kill the drake...Ingrid..."]
        },
    
        {  //TUNNEL VENTURE
            storyline: ["And on she went with her torch at hand. ","",""],
            choices: ["Use Mark of Ora", "Wait for help"]
        }
    
    
    ]

const layerThreeStory = [
    {},
    {},
    {},
    {},
    {storyline: ["She slowly but assuredly moved close to the drake. Its breath tranquil, and its lids half closed, she grew bolder and then suddenly, in one aggressive move jumped on the base of its neck.",
"It roared and ascended with ease. Grabbing on to the short dark hairs of its neck and soaring through the sky on this strong beast made her feel stronger than ever in her life, and like destiny was certainly on her side. "],

choices: ["Chuckle", "Keep your soic dignity"]
},
{
    storyline: ["Any living creature on the verge of death is capable of accessing enormous strength. The drake now vulnerable, she could not miss her chance. The mark on her right wrist felt hot and almost like it were dragging in the rest of her body.", "It was over promptly. She struck at its neck right at the junction between neck and body. A massive, gruesome hole remaining where the attack landed. Ingrid's problem was no more.","The girl descended the mountain quickly and thought to herself about finding some way to send news back on the drake's death. For now however, she'd focus on the road ahead. It was getting late and there was possibly no place to lodge. She'd have to keep going through a portion of the night and arrive at Amos slightly before daybreak. "],

    choices: ["Nothing phases me", "I should stay on the lookout for a safe place"],

    music: "/audio/Dying_Dragon.mp3"
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

let liBlocker = document.querySelector(".list-group") //this reference exists to hide the li element until it is needed

liBlocker.style.display = "none" 

//-------------------------Event Listeners------------------------------
button.addEventListener('click',init)
sliderBtns.addEventListener('click',mainGameInit)
listEl2.addEventListener('click',choiceLogic)


//-----------------------Functions---------------------------------------


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
    
    button.style.display='none'

    audioEl.src = "/audio/Hollow Knight OST - Title Theme.mp3"
    
   
    
}




function mainGameInit(){
liBlocker.style.display = "block"
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

    

    mainGameInit()
}













