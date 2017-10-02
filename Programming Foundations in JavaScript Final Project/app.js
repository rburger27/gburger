(function() {
  function Quiz() {
    const output = [];
    questions.forEach((Current, qNum) => {
      const answers = [];
      for (letter in Current.answers) {
        answers.push(`<label>
            <input type="radio" name="question${qNum}" value="${letter}">
            ${letter} :
            ${Current.answers[letter]}
          </label><br><br>`);
      }
      output.push(`<div class="question"> ${Current.question} </div>
        <div class="answers"> ${answers.join("")} </div>`);
    });
    quiz.innerHTML = output.join("");
  }

  function sResults() {
    const answerC = quiz.querySelectorAll(".answers");
    let numCorrect = 0;
    questions.forEach((Current, qNum) => {
      const Answers = answerC[qNum];
      const selector = `input[name=question${qNum}]:checked`;
      const userAnswer = (Answers.querySelector(selector) || {}).value;
      if (userAnswer === Current.correctAnswer) {
        numCorrect++;
      } else {
        console.log("error");
      }
    });
    resultsC.innerHTML = `<br>${numCorrect} out of ${questions.length}`;
  }

  const quiz = document.getElementById("quiz");
  const resultsC = document.getElementById("results");
  const Submit = document.getElementById("submit");
  const questions = [
    {
      question: "What is a way to display in javascript",
      answers: {
        a: "innerHTML",
        b: "return",
        c: "display.window"
      },
      correctAnswer: "a"
    }, {
      question: "A variable defined in a function can be used throughout you code",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    }, {
      question: "The named values, in JavaScript objects, are called",
      answers: {
        a: "class",
        b: "value",
        c: "object",
        d: "properties"
      },
      correctAnswer: "d"
    }, {
      question: "What are the real values passed to (and received by) the function?",
      answers: {
        a: "Arguments",
        b: "Objects",
        c: "Parameters"
      },
      correctAnswer: "a"
    }, {
      question: "This function should be used to help keep errors from bubbling up to the user.",
      answers: {
        a: "if",
        b: "Try Catch",
        c: "for/in"
      },
      correctAnswer: "b"
    }
  ];
  Quiz();
  Submit.addEventListener("click", sResults);
})();
