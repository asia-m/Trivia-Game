

setTimeout(timeUp, 1000 * 30);


function timeUp() {
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
  //When time is up alert should pop up with results and a messsage//
  questions.forEach(function (question, i) {
    // get access to a radio button for current question
    var userResponse = $(`input[name='input-${i}']:checked`).val();

    // compare the userResponse to the question.a
    if (userResponse === question.a) {
      score++;
    }

    console.log(userResponse);
  });
  updateScore();
}

var questions = [
  { q: "Priness Jasmine is a character in Aladdin", a: "t" },
  { q: "Simba is played by Jason Weaver in the original Lion King", a: "t" },
  { q: "Snow White is a priness in Snow White and The 6 Dwarves", a: "f" },
  { q: "Disney was created and branded by Paul Disney", a: "f" },
  { q: "Mickey Mouse's original debut year was 1995", a: "f" }
];


var score = 0;

var questionIndex = 0;


function renderQuestion() {
  questions.forEach(function (question, i) {
    $("#question").append(
      "<p>" + question.q + "</p>" +
      `<input type="radio" name= "input-${i}" value="t">True<br>
      <input type="radio" name="input-${i}" value="f">False <br>`
    )

  })

}

function updateScore() {
  alert("Time's Up!\n\n Your Score: " + score)
  document.querySelector("#score").innerHTML = "Score: " + score;
}


renderQuestion();






