let btn = document.getElementById('scroll');

btn.addEventListener('click', () => {
    document.getElementsByClassName('project-list-section').scrollIntoView();
})