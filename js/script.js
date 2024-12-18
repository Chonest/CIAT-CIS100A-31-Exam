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
    showQuetions(0); // Call showQuestions function
    queCounter(1); // Initialize question counter
    startTimer(60); // Start the timer
    startTimerLine(0); // Start the timer line
};

let timeValue = 60;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

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
    widthValue = 0;
    showQuetions(que_count); // Show the first question
    queCounter(que_numb); // Initialize question counter
    clearInterval(counter); // Clear timer
    clearInterval(counterLine); // Clear timer line
    startTimer(timeValue); // Restart the timer
    startTimerLine(widthValue); // Restart the timer line
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
        showQuetions(que_count); // Show the next question
        queCounter(que_numb); // Update question counter
        clearInterval(counter); // Clear timer
        clearInterval(counterLine); // Clear timer line
        startTimer(timeValue); // Restart the timer
        startTimerLine(widthValue); // Restart the timer line
        timeText.textContent = "Time Left"; // Reset timer text
        next_btn.classList.remove("show"); // Hide the next button
    } else {
        clearInterval(counter); // Clear timer
        clearInterval(counterLine); // Clear timer line
        showResult(); // Show the result box
    }
};

// Getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");

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
    let correcAns = questions[que_count].answer; // Get correct answer
    const allOptions = option_list.children.length; // Get total number of options

    if (userAns === correcAns) { // If the answer is correct
        userScore += 1; // Increment score
        answer.classList.add("correct"); // Mark as correct
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Add tick icon
    } else {
        answer.classList.add("incorrect"); // Mark as incorrect
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Add cross icon

        // Highlight the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent.trim() === correcAns) {
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

// Show the result box
function showResult() {
    info_box.classList.remove("activeInfo"); // Hide info box
    quiz_box.classList.remove("activeQuiz"); // Hide quiz box
    result_box.classList.add("activeResult"); // Show result box
    const scoreText = result_box.querySelector(".score_text");
    let scoreTag = '<span>You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
    scoreText.innerHTML = scoreTag;
}

// Timer functions
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Update timer text
        time--; // Decrement time
        if (time < 10) timeCount.textContent = "0" + time; // Add leading zero
        if (time < 0) {
            clearInterval(counter); // Clear timer
            timeText.textContent = "Time Off"; // Update timer text
            autoSelectCorrectAnswer(); // Auto-select correct answer
        }
    }
}

function startTimerLine(time) {
    counterLine = setInterval(timer, 120);
    function timer() {
        time += 1; // Increment time line
        time_line.style.width = time + "px"; // Update time line width
        if (time > 549) clearInterval(counterLine); // Clear timer line
    }
}

// Automatically select the correct answer when time runs out
function autoSelectCorrectAnswer() {
    const allOptions = option_list.children.length;
    let correcAns = questions[que_count].answer;
    for (let i = 0; i < allOptions; i++) {
        if (option_list.children[i].textContent.trim() === correcAns) {
            option_list.children[i].setAttribute("class", "option correct");
            option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
        }
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

// Update question counter
function queCounter(index) {
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}
