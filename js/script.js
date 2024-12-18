// Shuffle function to randomize arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

let timeValue = 60;
let que_count = 0;
let userScore = 0;
let counter;
let counterLine;
let shuffledQuestions = []; // Array to hold shuffled questions

// If startQuiz button clicked
start_btn.onclick = () => {
    shuffledQuestions = shuffleArray([...questions]); // Shuffle questions
    info_box.classList.add("activeInfo"); // Show info box
};

// If exitQuiz button clicked
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
};

// If continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    showQuestions(0); // Call showQuestions function
    queCounter(1); // Initialize question counter
    startTimer(60); // Start the timer
    time_line.style.width = "0"; // Reset the time line
    startTimerLine(); // Start the timer line
};

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If restartQuiz button clicked
restart_quiz.onclick = () => {
    shuffledQuestions = shuffleArray([...questions]); // Reshuffle the questions
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    result_box.classList.remove("activeResult"); // Hide result box
    timeValue = 60;
    que_count = 0;
    userScore = 0;
    showQuestions(que_count); // Show the first question
    queCounter(1); // Initialize question counter
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    startTimer(timeValue); // Restart the timer
    time_line.style.width = "0"; // Reset the time line
    startTimerLine(); // Restart the timer line
    timeText.textContent = "Time Left"; // Reset timer text
};

quit_quiz.onclick = () => {
    window.location.reload(); // Reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// If Next Question button clicked
next_btn.onclick = () => {
    if (que_count < shuffledQuestions.length - 1) {
        que_count++;
        showQuestions(que_count); // Show the next question
        queCounter(que_count + 1); // Update question counter
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(timeValue); // Restart the timer
        time_line.style.width = "0"; // Reset the time line
        startTimerLine(); // Restart the timer line
        timeText.textContent = "Time Left"; // Reset timer text
        next_btn.classList.remove("show"); // Hide the next button
    } else {
        clearInterval(counter);
        clearInterval(counterLine);
        showResult(); // Show the result box
    }
};

// Show questions function
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const currentQuestion = shuffledQuestions[index];
    const shuffledOptions = shuffleArray([...currentQuestion.options]); // Shuffle options

    // Reset time_line styles
    time_line.className = "time_line"; // Reset to default class
    time_line.style.width = "0"; // Reset the width to 0

    let que_tag = `<span>${index + 1}. ${currentQuestion.question}</span>`; // Add dynamic numbering
    que_text.innerHTML = que_tag;

    let option_tag = '';
    shuffledOptions.forEach(option => {
        option_tag += `<div class="option"><span>${option}</span></div>`;
    });

    option_list.innerHTML = option_tag;

    const options = option_list.querySelectorAll(".option");
    options.forEach(option => {
        option.setAttribute("onclick", "optionSelected(this)");
    });
}


// If user clicked on an option
function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);

    let userAns = answer.textContent.trim();
    let correctAns = shuffledQuestions[que_count].answer;

    if (userAns === correctAns) {
        userScore++;
        answer.classList.add("correct");
    } else {
        answer.classList.add("incorrect");
        option_list.querySelectorAll(".option").forEach(opt => {
            if (opt.textContent.trim() === correctAns) {
                opt.classList.add("correct");
            }
        });
    }

    option_list.querySelectorAll(".option").forEach(opt => {
        opt.classList.add("disabled");
    });

    next_btn.classList.add("show");
}

// Timer and other functions remain unchanged...


// Timer functions
function startTimer(duration) {
    let time = duration;
    timeCount.textContent = time; // Initialize timer display
    counter = setInterval(() => {
        time--; // Decrement time
        timeCount.textContent = time < 10 ? "0" + time : time; // Update timer display

        if (time === 0) {
            clearInterval(counter); // Stop timer
            timeText.textContent = "Time Off"; // Update text
            autoSelectCorrectAnswer(false); // Mark the question as wrong
        }
    }, 1000);
}

function startTimerLine() {
    let maxWidth = 550; // Maximum width of the time line in pixels
    let totalDuration = 60 * 1000; // Total duration in milliseconds
    let elapsed = 0; // Track elapsed time

    clearInterval(counterLine); // Clear any previous intervals
    time_line.className = "time_line"; // Reset to default class

    counterLine = setInterval(() => {
        elapsed += 10; // Increment elapsed time
        let currentWidth = (elapsed / totalDuration) * maxWidth;
        time_line.style.width = currentWidth + "px"; // Update the time line width

        // Update the time line color based on elapsed time
        if (elapsed >= totalDuration * 0.5 && elapsed < totalDuration * 0.83) {
            time_line.classList.add("orange");
            time_line.classList.remove("red");
        } else if (elapsed >= totalDuration * 0.83) {
            time_line.classList.add("red");
            time_line.classList.remove("orange");
        }

        // Stop the timer when it reaches the maximum duration
        if (elapsed >= totalDuration) {
            clearInterval(counterLine);
        }
    }, 10); // 10ms interval for smoother animation
}


// Automatically select the correct answer when time runs out
function autoSelectCorrectAnswer(isUserAction = true) {
    const allOptions = option_list.children.length;
    let correctAns = questions[que_count].answer;

    // Highlight the correct answer
    for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent.trim() === correctAns) {
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
        option_list.children[i].classList.add("disabled");
    }

    // If the question times out and it's not a user action, mark it as incorrect
    if (!isUserAction) {
        console.log("Time expired: Answer marked as wrong.");
    }

    next_btn.classList.add("show"); // Show the Next button
}

// Show the result box
function showResult() {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag; // Add score to the result box
}

// Update question counter
function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; // Update question count
}

