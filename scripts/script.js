let header = document.querySelector('.header-area'),
    about = document.querySelector('.about'),
    education = document.querySelector('.education'),
    code = document.querySelector('.code'),
    status = false;

header.addEventListener('click', (event) => {
    let id = event.target.id;
    if(id != 'eduButton' && id != 'aboutButton' && id != 'codeButton') return
    event.preventDefault();
    if(id == 'eduButton' && !education.classList.contains('active')){
        show(education);
    }
    if(id == 'aboutButton' && !about.classList.contains('active')){
        show(about);
    }
    if(id == 'codeButton' && !code.classList.contains('active')){
        show(code);
    }
});

function show(element){
    if(status) return 0
    status = true;
    let active = document.querySelector('.active');
    active.addEventListener('transitionend', reActive);
    active.classList.remove('active');
    active.classList.add('hidden');
    function reActive(){
        active.style.display = 'none';
        element.style.display = 'block';
        setTimeout(() => {
            element.classList.remove('hidden');
            element.classList.add('active')}, 0);
            active.removeEventListener('transitionend', reActive);
            status = false;
    }
};
