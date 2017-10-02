(function() {
  var questions = [{
    question: "What is a way to display in javascript?",
    choices: ["return","innerHTML", "display.window"],
    correctAnswer: 1
  }, {
    question: "A variable defined in a function can be used throughout you code",
    choices: ["True", "False",],
    correctAnswer: 1
  }, {
    question: "The named values, in JavaScript objects, are called",
    choices: ["class","value","object","properties"],
    correctAnswer: 3
  }, {
    question: "What are the real values passed to (and received by) the function?",
    choices: ["Arguments","Objects", "Parameters"],
    correctAnswer: 0
  }, {
    question: "This function should be used to help keep errors from bubbling up to the user.",
    choices: ["if", "Try Catch", "for/in"],
    correctAnswer: 4
  }];

  var qCounter = 0;
  var selections = [];
  var quiz = $('#quiz');

  displayNext();

  $('#next').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    if (isNaN(selections[qCounter])) {
      alert('Please make a selection!');
    } else {
      qCounter++;
      displayNext();
    }
  });

  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    qCounter--;
    displayNext();
  });

  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    qCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  function choose() {
    selections[qCounter] = +$('input[name="answer"]:checked').val();
  }

  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(qCounter < questions.length){
        var nextQuestion = createQuestionElement(qCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[qCounter]))) {
          $('input[value='+selections[qCounter]+']').prop('checked', true);
        }

        if(qCounter === 1){
          $('#prev').show();
        } else if(qCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
