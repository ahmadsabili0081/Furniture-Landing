const btn = document.querySelector('.btn');
btn.addEventListener('click', btnUp);
function btnUp(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 0);
    btn.classList.toggle('scrollBtn', scrollY > 0);
});
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () =>{
    const nav = document.querySelector('nav');
    nav.classList.toggle('navShow');
    hamburger.classList.toggle('hamburgerRotate');
});
const modal = document.getElementsByClassName('modal');
for(let i = 0; i < modal.length; i++){
    modal[i].addEventListener('click', modalBtn);
}
function modalBtn (){
    window.alert('Maaf, File ini masih belum tersedia');
}

// section
const section = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollPage);
function scrollPage (){
    let scrollY = window.pageYOffset;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".navbar__furniture a[href*=" + sectionId + "]").classList.add('active');
        }else{
            document.querySelector(".navbar__furniture a[href*=" + sectionId + "]").classList.remove('active');
        }
    })
}