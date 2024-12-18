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

// If startQuiz button clicked
start_btn.onclick = () => {
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
    time_line.className = "time_line"; // Reset the time line classes
    time_line.style.width = "0"; // Reset the time line width
    startTimerLine(); // Start the timer line
};

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Show quiz box
    result_box.classList.remove("activeResult"); // Hide result box
    timeValue = 60;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    time_line.className = "time_line"; // Reset the time line classes
    time_line.style.width = "0"; // Reset the time line width
    showQuestions(que_count); // Show the first question
    queCounter(que_numb); // Initialize question counter
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    startTimer(timeValue); // Restart the timer
    startTimerLine(); // Restart the timer line
    timeText.textContent = "Time Left"; // Reset timer text
    next_btn.classList.remove("show"); // Hide the next button
};

// If quitQuiz button clicked
quit_quiz.onclick = () => {
    window.location.reload(); // Reload the current window
};

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// If Next Question button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { // If more questions are available
        que_count++; // Increment question count
        que_numb++; // Increment question number
        showQuestions(que_count); // Show the next question
        queCounter(que_numb); // Update question counter
        clearInterval(counter); // Clear timer
        clearInterval(counterLine); // Clear timer line
        startTimer(timeValue); // Restart the timer
        time_line.className = "time_line"; // Reset the time line classes
        time_line.style.width = "0"; // Reset the time line width
        startTimerLine(); // Restart the timer line
        timeText.textContent = "Time Left"; // Reset timer text
        next_btn.classList.remove("show"); // Hide the next button
    } else {
        clearInterval(counter); // Clear timer
        clearInterval(counterLine); // Clear timer line
        showResult(); // Show the result box
    }
};

// Getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");

    // Add the question text
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    que_text.innerHTML = que_tag;

    // Dynamically generate options
    let option_tag = '';
    questions[index].options.forEach(option => {
        option_tag += '<div class="option"><span>' + option + '</span></div>';
    });

    option_list.innerHTML = option_tag; // Insert options into the option_list container

    // Add click event listeners to options
    const options = option_list.querySelectorAll(".option");
    options.forEach(option => {
        option.setAttribute("onclick", "optionSelected(this)");
    });
}

// Icons for correct and incorrect answers
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// If user clicked on an option
function optionSelected(answer) {
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line

    let userAns = answer.textContent.trim(); // Get selected answer
    let correctAns = questions[que_count].answer; // Get correct answer
    const allOptions = option_list.children.length; // Get total number of options

    if (userAns === correctAns) { // If the answer is correct
        userScore += 1; // Increment score
        answer.classList.add("correct"); // Mark as correct
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon
    } else {
        answer.classList.add("incorrect"); // Mark as incorrect
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon

        // Highlight the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent.trim() === correctAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }

    // Disable all options after an answer is selected
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }

    next_btn.classList.add("show"); // Show the Next button
}

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
    let increment = maxWidth / (totalDuration / 10); // Increment per 10ms interval

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

