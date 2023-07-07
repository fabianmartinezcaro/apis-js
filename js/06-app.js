const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono')

microfono.addEventListener('click', ejecutarSpeechAPI)

function ejecutarSpeechAPI(){
    const speechRecognition = webkitSpeechRecognition;
    const recognition = new speechRecognition();

    recognition.start();

    recognition.onstart = function () {
        salida.classList.add('mostrar');
        salida.textContent = 'Escuchando...';
    }

    recognition.onspeechend = function () {
        salida.textContent = 'Se dejo de grabar...';
        recognition.stop();
    }

    recognition.onresult = function (event) {
        console.log(event.results[0][0]);

        const {transcript, confidence} = event.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${transcript}`;

        const seguridad = document.createElement('p');
        speech.innerHTML = `Precisión: ${parseInt(confidence) * 100}`;

        salida.appendChild(speech);
        salida.appendChild(seguridad);
        
    }

}