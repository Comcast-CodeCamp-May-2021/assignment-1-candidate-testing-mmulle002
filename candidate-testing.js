const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "] ;
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];
let numberOfQuestions = 5
let numberOfCorrect = 0 //correct answer starting at 0 to count up//

function askForName() {
   // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? "); 
  console.log("Hello " + candidateName);
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++){
  candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);
  }
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
}

function gradeQuiz(candidateAnswers) {
  console.log(`Candidate Name: ${candidateName}`);
  for (let i = 0; i < candidateAnswers.length; i++) {
    if (correctAnswers[i].toLowerCase() === candidateAnswers[i].toLowerCase()) { numberOfCorrect = numberOfCorrect+1 //to get correct answer total//
     }
    console.log(`${i+1} ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  //(correctAnswer.toLowerCase() === candidateAnswer.toLowerCase()) {
   //console.log("Correct");
  //}
   //else {
     //console.log("Incorrect")
  // }
if ((numberOfCorrect / candidateAnswers.length * 100) >=80){
  console.log(`>>> Overall Grade: ${numberOfCorrect / candidateAnswers.length * 100}% (${numberOfCorrect} of ${correctAnswers.length} responses correct) <<<`)
  console.log('>>> Status: PASSED <<<');
  } else {
    console.log(`>>> Overall Grade: ${numberOfCorrect / candidateAnswers.length * 100}% (${numberOfCorrect} of ${correctAnswers.length} reponses correct) <<<`)
    console.log('>>> Status: FAILED <<<\n');
  }


//console.log(correctAnswers)
// TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade = numberOfCorrect / numberOfQuestions * 100;
  

  return grade;
}


function runProgram() {
  (askForName());
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};