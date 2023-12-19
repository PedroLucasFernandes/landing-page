function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function startTimer(durationInSeconds, timerId) {
    let timeRemaining = durationInSeconds;
    const timerElement = document.getElementById(timerId);

    function updateTimer() {
        timerElement.textContent = formatTime(timeRemaining);
        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            alert('Tempo encerrado!');
        } else {
            timeRemaining--;
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    return timerInterval;
}

document.addEventListener('DOMContentLoaded', function () {
    const timer1 = startTimer(15 * 60, "timer1");
    const timer2 = startTimer(15 * 60, "timer2");
    const timer3 = startTimer(15 * 60, "timer3");
});


let beneficioAtual = 1;

function mostrarBeneficio(numeroBeneficio) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`beneficio${i}`).style.display = 'none';
    }

    document.getElementById(`beneficio${numeroBeneficio}`).style.display = 'block';

    beneficioAtual = numeroBeneficio;
}

function mostrarBeneficioAnterior() {
    beneficioAtual = (beneficioAtual - 1) > 0 ? (beneficioAtual - 1) : 3;
    mostrarBeneficio(beneficioAtual);
}

function mostrarProximoBeneficio() {
    beneficioAtual = (beneficioAtual + 1) <= 3 ? (beneficioAtual + 1) : 1;
    mostrarBeneficio(beneficioAtual);
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarBeneficio(beneficioAtual);
});

let relatoAtual = 1;

function mostrarRelato(numeroRelato) {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`relato${i}`).style.display = 'none';
    }

    document.getElementById(`relato${numeroRelato}`).style.display = 'block';

    relatoAtual = numeroRelato;
}

function mostrarRelatoAnterior() {
    relatoAtual = (relatoAtual - 1) > 0 ? (relatoAtual - 1) : 3;
    mostrarRelato(relatoAtual);
}

function mostrarProximoRelato() {
    relatoAtual = (relatoAtual + 1) <= 3 ? (relatoAtual + 1) : 1;
    mostrarRelato(relatoAtual);
}

document.addEventListener('DOMContentLoaded', function () {
    mostrarRelato(relatoAtual);
});