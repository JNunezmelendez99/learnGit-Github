const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;

    if (quizForm.q1.value === 'a') score++;
    if (quizForm.q2.value === 'a') score++;
    if (quizForm.q3.value === 'a') score++;
    if (quizForm.q4.value === 'a') score++;
    if (quizForm.q5.value === 'b') score++;
    if (quizForm.q6.value === 'a') score++;
    if (quizForm.q7.value === 'a') score++;

    resultDiv.innerHTML = `Tu puntaje es: ${score} de 7.`;
    // Puedes añadir lógica para otorgar un badge aquí.
});