const game = document.querySelector(".game")
const result = document.querySelector("#result")
const computer = document.querySelector("#computerChoice")
const com = document.querySelector("#com")
const player = document.querySelector("#player")
const btn = document.querySelector(".btn")
const actions = [
    "rock",
    "paper",
    "scissors"
]

let rand = generateChoice()
let score1 = 0
let score2 = 0
let counter = 0

game.addEventListener("click", (e) => {
    switch(e.target.name) {
        case "rock": 
            pickWinner(e.target.name, actions[rand])
            break;
        case "paper": 
            pickWinner(e.target.name, actions[rand])
            break;
        case "scissors":
            pickWinner(e.target.name, actions[rand])
            break;
    }
})

function generateChoice() {
    return Math.floor(Math.random() * 3)
}

function pickWinner(playerChoice, computerChoice) {
    
    if(playerChoice === "rock" && computerChoice === "scissors"){
        computer.textContent = "Computer Choice: " + computerChoice
        result.textContent = "You Win!"
        score1 ++
        player.innerHTML = "Player: " + score1
    }

    else if(playerChoice === "paper" && computerChoice === "rock"){
        computer.textContent = "Computer Choice: " + computerChoice
        result.textContent = "You Win!"
        score1 ++
        player.innerHTML = "Player: " + score1
    }

    else if(playerChoice === "scissors" && computerChoice === "paper"){
        computer.textContent = "Computer Choice: " + computerChoice
        result.textContent = "You Win!"
        score1 ++
        player.innerHTML = "Player: " + score1
    } 

    else if(playerChoice === computerChoice){
        computer.textContent = "Computer Choice: " + computerChoice
        result.textContent = "Draw!"
    }

    else {
        computer.textContent = "Computer Choice: " + computerChoice
        result.textContent = "Computer Win!"
        score2 ++
        com.innerHTML = "Computer: " + score2
    }

    rand = generateChoice()

}

btn.addEventListener("click", function(){
    enable()
})

function disable(){
    game.pointerEvents = "none";
}

function enable(){
    game.pointerEvents = "auto"
    result.innerHTML = ""
    computer.innerText = ""
    com.innerHTML = ""
    player.innerHTML = ""
    score1 = ""
    score2 = ""
    counter = ""
}