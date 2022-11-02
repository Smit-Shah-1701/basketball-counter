let homeScore = 0
let awayScore = 0
let homeScoreElement = document.getElementById("home-score")
let awayScoreElement = document.getElementById("away-score")

scoreChecker()

function add1H(){
    homeScore += 1
    homeScoreElement.textContent = homeScore
    scoreChecker()
}

function add2H(){
    homeScore += 2
    homeScoreElement.textContent = homeScore
    scoreChecker()
}

function add3H(){
    homeScore += 3
    homeScoreElement.textContent = homeScore
    scoreChecker()
}

function add1A(){
    awayScore += 1
    awayScoreElement.textContent = awayScore
    scoreChecker()
}

function add2A(){
    awayScore += 2
    awayScoreElement.textContent = awayScore
    scoreChecker()
}

function add3A(){
    awayScore += 3
    awayScoreElement.textContent = awayScore
    scoreChecker()
}


function scoreChecker(){
    if (homeScore > awayScore){
        homeScoreElement.style.color = "green";
        awayScoreElement.style.color = "red";
        
    } else if (homeScore < awayScore) {
        awayScoreElement.style.color = "green";
        homeScoreElement.style.color = "red";
    } else {
        homeScoreElement.style.color = "orange";
        awayScoreElement.style.color = "orange";
    }
}