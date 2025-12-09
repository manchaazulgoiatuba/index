let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 200;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id')

        if(top >= offset && top < offset + heightSection){
            links.forEach(link => {
                link.classList.remove('actived');

                document.querySelector(`header a[href*='${idSection}']`).classList.add('actived');
            })
        }
    })
})

function scrollSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    const topSection = section.offsetTop - 200;
    window.scrollTo({
        top: topSection,
        behavior: 'smooth'
    })
}

links.forEach(link => {
    link.addEventListener('click', scrollSection)
})