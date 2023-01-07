let userScore = 0;
let computerScore = 0;  
let result = document.getElementById("message");
let image = document.getElementById("badge-image");
let brightness = document.querySelector("#game");
let bg = document.querySelector("html");  
let userImage = document.getElementById("user-choice");
let compImage = document.getElementById("comp-choice");

function scorer(choice) {
    let userPick =  choice
    let compPick = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    if(userPick != compPick) {
        if(userPick === 1) {             
            if(compPick === 3) {
                userScore++;
            } else computerScore++;
        } else if(userPick === 2) {
            if(compPick === 1) {
                userScore++;
            } else computerScore++;
        } else if(userPick === 3) {
            if(compPick === 2) {
                userScore++;
            } else computerScore++;
        }
    }
    
    let userEl = document.getElementById("user-score");
    let compEl = document.getElementById("comp-score");
    
    userEl.textContent = userScore;
    compEl.textContent = computerScore;   
    
    showChoice(userPick, compPick); 

    if(userScore === 3 || computerScore === 3) {
        winner();
    }
}

function showChoice(userPick, compPick) {
    userImage.setAttribute("class", "images");
    compImage.setAttribute("class", "images");
    
    switch(userPick) {
        case 1:
            userImage.setAttribute("src", "images/hand1-removebg-preview.png");
        break; 
        
        case 2:
            userImage.setAttribute("src", "images/hand3-removebg-preview.png");
        break; 
        
        case 3:
            userImage.setAttribute("src", "images/hand2-removebg-preview.png");
        break;        
    }
    
    switch(compPick) {
        case 1:
            compImage.setAttribute("src", "images/comp-hand1-removebg-preview.png");
        break; 
        
        case 2:
            compImage.setAttribute("src", "images/comp-hand3-removebg-preview.png");
        break;  
        
        case 3:
            compImage.setAttribute("src", "images/comp-hand2-removebg-preview.png");
        break;        
    }    
}

function setName() {
    let name = prompt("Set your name").toUpperCase();
    document.getElementById("name").textContent = name;
}

function winner() {
    if(userScore === 3) {
        image.setAttribute("src", "images/image-removebg-preview (6).png");
        document.getElementById("result").textContent = "CONGRATULATIONS!";
        document.getElementById("result_next").textContent = "YOU WIN";
    } else if (computerScore === 3) {
        image.setAttribute("src", "images/thumbs-up.png");
        document.getElementById("result").textContent = "OH NO, YOU LOSE!";
        document.getElementById("result_next").textContent = "NICE TRY";
    }

    brightness.style.filter = "brightness(0.5)";
    document.body.style.background = "#a4921c";
    bg.style.background = "#a4921c";
    result.classList.add("message-up");
}

function playAgain(){
    userScore = 0;
    computerScore = 0;
    result.classList.remove("message-up");
    document.getElementById("name").textContent = "YOU";
    document.body.style.background = "#ffdd00";
    bg.style.background = "#ffdd00";
    brightness.style.filter = "brightness(1)";
    document.getElementsByClassName("score")[0].textContent = 0;
    document.getElementsByClassName("score")[1].textContent = 0;
    userImage.removeAttribute("src");
    compImage.removeAttribute("src");
}