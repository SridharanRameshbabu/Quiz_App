const answers = {
    'q1': 'MS Dhoni',
    'q2': 'Australia',
    'q3': 'T20',
    'q4': 'Michael Phelps',
    'q5': 'Brazil',
    'q6': 'Sumo Wrestling',
    'q7': 'Basketball',
    'q8': '30',
    'q9': 'Wimbledon',
    'q10': 'Lionel Messi',
    'q11': 'Albert Einstein',
    'q12': 'Tokyo',
    'q13': 'George Orwell',
    'q14': 'Jupiter',
    'q15': 'Amelia Earhart',
    'q16': 'Au',
    'q17': 'Leonardo da Vinci',
    'q18': 'Alexander Graham Bell',
    'q19': 'Vatican City',
    'q20': 'Neil Armstrong',
    'q21': 'Albert Einstein',
    'q22': 'Mitochondria',
    'q23': 'Tim Berners-Lee',
    'q24': 'Central Processing Unit',
    'q25': 'Temporary data storage',
    'q26': 'Nitrogen',
    'q27': 'Hard Drive',
    'q28': '299,792,458 meters per second',
    'q29': 'Java',
    'q30': 'Google',
    'q31': 'George Washington',
    'q32': '1945',
    'q33': 'Christopher Columbus',
    'q34': 'Amelia Earhart',
    'q35': 'Mayflower',
    'q36': '1989',
    'q37': 'Qin Shi Huang',
    'q38': 'Cleopatra',
    'q39': 'Joseph Stalin',
    'q40': '1912',
    'q41': 'Paris',
    'q42': 'Asia',
    'q43': 'Amazon River',
    'q44': 'Vatican City',
    'q45': 'Pacific Ocean',
    'q46': 'Sahara Desert',
    'q47': 'Japan',
    'q48': 'Greenland',
    'q49': 'Nile River',
    'q50': 'Mount Everest',
    'q51': '12',
    'q52': '3.14',
    'q53': '180°',
    'q54': '72',
    'q55': '153.86 cm²',
    'q56': '11',
    'q57': '20 cm',
    'q58': '32',
    'q59': '10',
    'q60': '5',
    'q61': 'George Orwell',
    'q62': 'William Shakespeare',
    'q63': 'J.K. Rowling',
    'q64': 'To Kill a Mockingbird',
    'q65': 'J.D. Salinger',
    'q66': 'The Fellowship of the Ring',
    'q67': 'Herman Melville',
    'q68': 'A Study in Scarlet',
    'q69': 'Jane Austen',
    'q70': 'F. Scott Fitzgerald',
    'q71': 'Carbon Dioxide',
    'q72': 'Elephant',
    'q73': 'Pacific Ocean',
    'q74': 'The Sun',
    'q75': '71%',
    'q76': 'Amazon River',
    'q77': 'Amazon Rainforest',
    'q78': 'Javan Rhino',
    'q79': 'Earthquake',
    'q80': 'Logging',
    'q81': 'Poseidon',
    'q82': 'Thor',
    'q83': 'Theseus',
    'q84': 'Shiva',
    'q85': 'Minerva',
    'q86': 'Anubis',
    'q87': 'Arachne',
    'q88': 'Ares',
    'q89': 'Aphrodite',
    'q90': 'Vishnu'
};


function selectOption(selectedOption, questionName) {
    // Remove selection from all options in the same question
    document.querySelectorAll(`.option[data-question="${questionName}"]`).forEach(option => {
        option.classList.remove("selected");
    });

    // Set the selected option
    selectedOption.classList.add("selected");
    selectedOption.setAttribute("data-question", questionName);
}

// Check answers function
function checkAnswers() {
    let score = 0;
    const questions = document.querySelectorAll('.question');

    // Loop through all questions and check the selected answer
    questions.forEach(question => {
        const questionName = question.getAttribute('id'); // e.g., q1, q2, ...
        const selectedOption = question.querySelector('.option.selected');
        const image = question.querySelector('.imgs img');

        if (selectedOption) {
            const selectedAnswer = selectedOption.innerText;
            // Compare the selected answer with the correct answer
            if (selectedAnswer === answers[questionName]) {
                score++;
                selectedOption.style.background = "green";
                image.setAttribute('src', 'images/giphy.gif'); 
                if (image) image.style.display = "block";
            } 
            
            else {
                selectedOption.style.background = "red";
                image.setAttribute('src', 'images/tenor.gif');
                if (image) image.style.display = "block";
            }
        }
    });

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `Your score is ${score} out of 10`;

    // Show the Bootstrap modal
    const resultsModal = new bootstrap.Modal(document.getElementById('resultsModal'));
    resultsModal.show();

}

const questions = document.querySelectorAll('[id^="cont"]');
const main = document.getElementById('main');

function showQuestion(index) {
    questions.forEach((question, i) => {
        question.style.display = i === index - 1 ? "block" : "none";
        main.classList.add('d-none');
    });
}
