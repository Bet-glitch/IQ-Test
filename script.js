document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const levelSelection = document.getElementById('levelSelection');
    const questionsDiv = document.getElementById('questions');
    const questionContainer = document.getElementById('questionContainer');
    const resultDiv = document.getElementById('result');
    const scoreMessage = document.getElementById('scoreMessage');
    const retakeButton = document.getElementById('retake');
    
    const questions = {
        outstanding: [
            { question: 'What is the chemical symbol for water?', options: ['H2O', 'O2', 'CO2', 'NaCl'], answer: 'H2O' },
            { question: 'What planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], answer: 'Mars' },
            { question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Endoplasmic Reticulum'], answer: 'Mitochondria' },
            { question: 'Who was the first President of the United States?', options: ['Thomas Jefferson', 'Abraham Lincoln', 'George Washington', 'John Adams'], answer: 'George Washington' },
            { question: 'What year did World War II end?', options: ['1939', '1941', '1945', '1949'], answer: '1945' }
        ],
        good: [
            { question: 'What is 2 + 2?', options: ['3', '4', '5', '6'], answer: '4' },
            { question: 'What is 5 x 5?', options: ['20', '25', '30', '35'], answer: '25' },
            { question: 'Who discovered America?', options: ['Christopher Columbus', 'Ferdinand Magellan', 'Vasco da Gama', 'Marco Polo'], answer: 'Christopher Columbus' },
            { question: 'What is the boiling point of water?', options: ['90°C', '100°C', '110°C', '120°C'], answer: '100°C' },
            { question: 'What gas do plants use for photosynthesis?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], answer: 'Carbon Dioxide' }
        ],
        average: [
            { question: 'What is 10 - 4?', options: ['4', '6', '8', '10'], answer: '6' },
            { question: 'What is 7 + 6?', options: ['12', '13', '14', '15'], answer: '13' },
            { question: 'Who was the first man on the moon?', options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Michael Collins'], answer: 'Neil Armstrong' },
            { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Jupiter' }
        ]
    };

    function showQuestions(level) {
        questionContainer.innerHTML = '';
        const questionList = questions[level];
        questionList.forEach((q, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map((option, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${option}">
                        ${option}
                    </label><br>
                `).join('')}
            `;
            questionContainer.appendChild(div);
        });
        questionsDiv.classList.remove('hidden');
    }

    function calculateScore(level) {
        const questionList = questions[level];
        let score = 0;
        questionList.forEach((q, index) => {
            const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
            if (selectedOption && selectedOption.value === q.answer) {
                score++;
            }
        });
        return score;
    }

    function showResult(score) {
        const percentage = (score / 5) * 100;
        let message = '';
        if (percentage === 100) {
            message = 'Excellent work!';
        } else if (percentage >= 80) {
            message = 'Great job!';
        } else if (percentage >= 60) {
            message = 'Good effort!';
        } else if (percentage >= 40) {
            message = 'You can do better!';
        } else {
            message = 'Keep practicing!';
        }
        scoreMessage.innerHTML = `Your score is ${percentage}%. ${message}`;
        resultDiv.classList.remove('hidden');
    }

    document.getElementById('start').addEventListener('click', () => {
        home.classList.add('hidden');
        levelSelection.classList.remove('hidden');
    });

    document.querySelectorAll('.level-button').forEach(button => {
        button.addEventListener('click', (e) => {
            levelSelection.classList.add('hidden');
            showQuestions(e.target.dataset.level);
        });
    });

    document.getElementById('submit').addEventListener('click', () => {
        const level = document.querySelector('.level-button').dataset.level;
        const score = calculateScore(level);
        showResult(score);
        questionsDiv.classList.add('hidden');
    });

    retakeButton.addEventListener('click', () => {
        resultDiv.classList.add('hidden');
        home.classList.remove('hidden');
    });
});


           
        
           

           


      





