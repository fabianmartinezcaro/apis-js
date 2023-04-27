

document.addEventListener('DOMContentLoaded', () => {

    // Habilitamos el IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
            console.log('Elemento visible!')
        }
    })

    // Le decimos el elemento que queremos observar 
    observer.observe(document.querySelector('.premium'));

})
