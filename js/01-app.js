const botonNotificar = document.querySelector('#notificar');
botonNotificar.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resultado es ${resultado}`)
        })
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const notif = new Notification('Probando notificacion!', {
            icon: 'img/ccj.png',
            body: 'Aprende con codigos reales! '
        })

        notif.onclick = function () {
            window.open('https://www.youtube.com');
        }
    }
})