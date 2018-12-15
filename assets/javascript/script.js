var trivia=[
    Question0  = {question: "This is the hardest quiz on the internet", answer: false},
    Question1  = {question: "Lightning never strikes in the same place twice", answer: false},
    Question2  = {question: "If you cry in space the tears just stick to your face", answer: true},
    Question3  = {question: "If you cut an earthworm in half, both halves can regrow their body", answer: false},
    Question4  = {question: "Humans can distinguish between over a trillion different smells", answer: true},
    Question5  = {question: "Adults have fewer bones than babies do", answer: true},
    Question6  = {question: "Napoleon Bonaparte was extremely short", answer: false},
    Question7  = {question: "Goldfish only have a memory of three seconds", answer: false},
    Question8  = {question: "There are more cells of bacteria in your body than there are human cells", answer: true},
    Question9  = {question: "Your fingernails and hair keep growing after you die", answer: false},
    Question10 = {question: "Birds are dinosaurs", answer: true},
    Question11 = {question: "It costs the U.S. Mint more to make pennies and nickels than the coins are actually worth", answer: true},
    Question12 = {question: "Water spirals down the plughole in opposite directions in the northern and southern hemispheres", answer: false},
    Question13 = {question: "Buzz Aldrin was the first man to urinate on the moon", answer: true},
    Question14 = {question: "Twinkies have an infinite shelf life", answer: false},
    Question15 = {question: "Humans can’t breathe and swallow at the same time", answer: true},
    Question16 = {question: "The popular image of Santa Claus – chubby, bearded, in red and white clothes – was invented by Coca-Cola for an ad campaign", answer: false},
    Question17 = {question: "The top of the Eiffel Tower leans away from the sun", answer: true},
    Question18 = {question: "Drinking alcohol kills brain cells", answer: false},
    Question19 = {question: "The owner of the company that makes Segways died after accidentally driving his Segway off a cliff", answer: true},
]

var clock = 60;

$(document).ready(function(){ 
    //make the start button
    var start = $("<button>").text("START")
                            .addClass("start")
    $("#print").append(start)
    //onclick function for the start button to commence the game
    start.on("click", function(){
        
        start.hide();
        $("#print").append($('<div>').text("Time Remaining: 60").addClass("timer"))
       //printing the questions to the DOM
        for(var i=0; i<trivia.length; i++){
            var question = trivia[i].question
                answers = [{id: true,     name: "True"},
                           {id: false,    name: "False"}]
                
            $("#print").append(`<h2>${question}</h2><br><div class="answer" id="answer${i}"></div><br>`)

            for (var j=0; j < answers.length; j++) {
                $(`answer${i}`).append(j);
                $(`#answer${i}`).append($('<label>').text(answers[j].name)
                            .prepend($(`<input type="radio" value="${answers[j].id}" id="myanswer${j}" name="mychoice${i}">`,)));
            }
        }

    $("#print").append($("<button>").text("Done").addClass("done"));

        setInterval(function(){
            var timer = $(".timer")
            clock--
            if(clock > 0){
                timer.text(`Time Remaining: ${clock}`)
            }
            if(clock === 0){
                clearInterval(clock);
                scoreChecker();
                openPopup();
            }
        }, 1000);
    })
})

function scoreChecker(){
    var score = 0,
        unanswered = 20;
    
        for(var i=0; i < trivia.length; i++){
            if($(`input[name=mychoice${i}]:checked`).length > 0){
                unanswered--;
                if($(`input[name=mychoice${i}]:checked`).val() === trivia[i].answer.toString()){
                    score++;
                }
            }
        }
    $("#1").append(score)
    $("#2").append(20-score-unanswered)
    $("#3").append(unanswered)
}

function Timer(){
    var timer = $("<div>")
    clock--
    if(clock > 0){
        $("#print").prepend(timer.text(`Time Remaining: ${clock}`))
    }
    if(clock === 0){
        clearInterval(clock);
    }
}

function openPopup(){
    $.magnificPopup.open({
      items: {
        src: '#popup',
      }, 
      mainClass: 'mfp-newspaper'
    });
  }