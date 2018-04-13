var friend = null;
var number = null;
var hobbies = null;
var zodiac = null;
var color = null;
var bias = null;

var pageTitle = document.getElementById("page-title");
var pageTitleText = pageTitle.innerHTML;
var tryAgain = document.getElementById("try-again");
var quizWrapper = document.getElementById("quiz-wrapper");
var result = document.getElementById("result");
var formSubmit = document.getElementById("form-submit");

tryAgain.addEventListener("click", resetQuiz);
formSubmit.addEventListener("click", processResults);

function resetQuiz() {
    pageTitle.innerHTML = pageTitleText;
    quizWrapper.style.display = "flex";
    result.style.display = "none";
    tryAgain.style.display = "none";
    //submitButton.style.display = "block";
}

function processResults() {
    friend = document.querySelector('input[name="friend"]:checked');
    number = document.querySelector('input[name="number"]:checked');
    hobbies = document.querySelector('input[name="hobbies"]:checked');
    zodiac = document.querySelector('input[name="zodiac"]:checked');
    color = document.querySelector('input[name="color"]:checked');
    bias = document.querySelector('input[name="bias"]:checked');

    if(friend == null){
        alert("Complete all questions before continuing");
    }
    if(number == null){
        alert("Complete all questions before continuing");
    }
    if(hobbies == null){
        alert("Complete all questions before continuing");
    }
    if(zodiac == null){
        alert("Complete all questions before continuing");
    }  
    if(color == null){
        alert("Complete all questions before continuing");
    }
    if(bias == null){
        alert("Complete all questions before continuing");
    } else {
        var personality = getPersonality(); 
        quizWrapper.style.display = "none";
        formSubmit.style.display = "none";
        result.style.display = "block";
        tryAgain.style.display = "block";

        if (personality == "RM") {
            pageTitle.innerHTML = "You are RM"; 
            //result.style.backgroundImage = "url('img/character.png')";
        }
        if (personality == "Jin") {
            pageTitle.innerHTML = "You are Jin";
        }
        if (personality == "Suga") {
            pageTitle.innerHTML = "You are Suga";
        }
        if (personality == "J-hope") {
            pageTitle.innerHTML = "You are Jin";
        }
        if (personality == "Jimin") {
            pageTitle.innerHTML = "You are Jimin";
        }
        if (personality == "V") {
            pageTitle.innerHTML = "You are V";
        }
        if (personality == "Jungkook") {
            pageTitle.innerHTML = "You are Jungkook";
        

    }
}


function getPersonality() {
	var score = 0;
	if(friend.id === "The funny one") {
    score += 1;
    }
    else if(friend.id === "The quiet one") {
    score += 2;
    }
    else if(friend.id === "The crazy one") {
    score += 3;
    } else {
     (friend.id === "The artistic one") 
     score += 6;
    }

    if(number.id === "4") {
    score += 1;
    }
    else if(number.id === "7") {
    score += 3;
    }
    else if(number.id === "3") {
    score += 4;
    }
    else if(number.id === "10") {
    score += 5;
    } else {
      (number.id === "1") 
      score += 6; 
    }

    if(hobbies.id === "Cook") {
    score += 1;
    }
    else if(hobbies.id === "Listen to music") {
    score += 3;
    }
    else if(hobbies.id === "Sleep") {
    score += 4;
    }
    else if(hobbies.id === "Take pictures") {
    score += 5;
    } else {
      (hobbies.id === "Draw") 
      score += 6;
    }

    if(zodiac.id === "Sagittarius") {
    score += 1;
    }
    else if(zodiac.id === "Pisces") {
    score += 2;
    }
    else if(zodiac.id === "Aquarius") {
    score += 3;
    }
    else if(zodiac.id === "Libra") {
    score += 4; 
    }
    else if(zodiac.id === "Capricorn") {
    score += 5;
    } else {
    (zodiac.id === "Virgo") 
    score += 6;
    }

    if(color.id === "Blue") {
    score += 1;
    }
    else if(color.id === "White") {
    score += 2;
    }
    else if(color.id === "Green") {
    score += 3;
    }
    else if(color.id === "Black") {
    score += 4;
    } else {
      (color.id === "Gray") 
      score += 5;
    }

    if(bias.id === "Jin") {
    score += 1;
    }
    else if(bias.id === "Suga") {
    score += 2;
    }
    else if(bias.id === "J-hope") {
    score += 3;
    }
    else if(bias.id === "Jimin") {
    score += 4;
    }
    else if(bias.id === "V") {
    score += 5;
    } else {
      (bias.id === "Jungkook") 
      score += 6;
    }
    
    if(score == 0) {
        return "RM";
    }
    if(score >= 3 && score <=6) {
        return "Jin";
    }
    if(score >= 7 && score <=8) {
        return "Suga";
    }
    if(score >= 14 && score <=18) {
        return "J-hope";
    }
    if(score >= 19 && score <=20) {
        return "Jimin";
    }
    if(score >= 22 && score <=25) {
        return "V";
    }
    if(score >= 27 && score <=30) {
        return "Jungkook";
    }
  }
     




}
