let header = document.querySelector('.header-area');
header.addEventListener('click', (event) => {
    if(event.target.tagName != 'A' || event.target.href != "") return
    about.classList.toggle('hide');
    education.classList.toggle('hide');
});
