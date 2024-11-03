const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

// Respuestas correctas
const correctAnswers = {
    q1: 'a', // "git clone"
    q2: 'a', // "git status"
    q3: 'a', // "git commit -m"
    q4: 'a', // "git log"
    q5: 'b', // "git revert"
    q6: 'a', // "git diff"
    q7: 'a'  // "git branch -d <nombre_rama>"
};

// Explicaciones para respuestas correctas
const explanations = {
    q1: "El comando 'git clone' se usa para clonar un repositorio.",
    q2: "El comando 'git status' muestra el estado actual del repositorio.",
    q3: "El comando 'git commit -m' permite hacer un commit con un mensaje.",
    q4: "El comando 'git log' muestra el historial de commits.",
    q5: "El comando 'git revert' revierte cambios de un commit anterior.",
    q6: "El comando 'git diff' muestra las diferencias entre archivos.",
    q7: "El comando 'git branch -d <nombre_rama>' elimina una rama."
};

quizForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;
    let feedback = "<h2>Resultados:</h2>";

    // Itera sobre cada pregunta y verifica la respuesta
    for (let question in correctAnswers) {
        const userAnswer = quizForm[question].value;
        const correctAnswer = correctAnswers[question];

        if (userAnswer === correctAnswer) {
            score++;
            feedback += `<p>Pregunta ${question.slice(1)}: Correcto ✅</p>`;
        } else {
            feedback += `<p>Pregunta ${question.slice(1)}: Incorrecto ❌<br>La respuesta correcta es: <strong>${correctAnswer}</strong> - ${explanations[question]}</p>`;
        }
    }

    // Muestra el puntaje final
    feedback += `<h3>Tu puntaje es: ${score} de ${Object.keys(correctAnswers).length}</h3>`;
    resultDiv.innerHTML = feedback;
});
