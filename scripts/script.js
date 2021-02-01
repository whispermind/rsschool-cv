let header = document.querySelector('.header-area'),
    about = document.querySelector('#about'),
    education = document.querySelector('#education');
header.addEventListener('click', (event) => {
    let id = event.target.id;
    if(id != 'eduButton' && id != 'aboutButton') return
    event.preventDefault();
    if(id == 'eduButton' && education.classList.contains('hide')){
        education.classList.toggle('hide');
        about.classList.toggle('hide');
    }
    if(id == 'aboutButton' && about.classList.contains('hide')){
    }
});