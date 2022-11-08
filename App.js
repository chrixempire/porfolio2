var tabLinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')
let Sidemenu = document.getElementById('sideMenu');
let icon = document.getElementById('icon');
let light = document.getElementById('light')
let icons = document.getElementById('icons');
let lights = document.getElementById('lights')
let header = document.getElementById('header')
let seeMoreBtn = document.querySelector('.btn')
let port = document.getElementById('port')
const btnScrollTop = document.getElementById('btn-scroll')
btnScrollTop.addEventListener('click', ()=>{
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    }
      
    );
})













const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}
)

function closeMenu2(){
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}























function openTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}
function openMenu(){
    Sidemenu.style.right = "0"
}
function closeMenu(){
    Sidemenu.style.right = "-50%"
}
icon.addEventListener('click', function(){
    icon.classList.toggle('bi-moon-fill')
    if(icon.classList.contains('bi-moon-fill')){
        document.body.classList.add('theme')
        light.innerHTML = 'Dark'
        // document.getElementById('header').style.backgroundImage = 'url(images/try2.jfif)'
        document.getElementById('header').style.backgroundImage = 'url(images/Tryagain.avif)'

    }else{
        document.body.classList.remove('theme')
        light.innerHTML = 'Light'
        // document.getElementById('header').style.backgroundImage = 'url(images/light3-image.avif)'
        document.getElementById('header').style.backgroundImage = 'url(images/trialanderror.jpg)'
       
    }
})
icons.addEventListener('click', function(){
    icons.classList.toggle('bi-moon-fill')
    if(icons.classList.contains('bi-moon-fill')){
        document.body.classList.add('theme')
        lights.innerHTML = 'Dark'
        // document.getElementById('header').style.backgroundImage = 'url(images/white.avif)'
        document.getElementById('header').style.backgroundImage = 'url(images/Tryagain.avif)'
    }else{
        document.body.classList.remove('theme')
        lights.innerHTML = 'Light'
        document.getElementById('header').style.backgroundImage = 'url(images/trialanderror.jpg)'
    }
})
seeMoreBtn.addEventListener('click', (e)=> {
    port.classList.toggle('show-more');
    if(seeMoreBtn.innerText === 'SEE MORE'){
        seeMoreBtn.innerText = 'SEE LESS'
    }else {
        seeMoreBtn.innerText = 'SEE MORE'
    }
})






const texts = ["Hello i,m Christian Anyikamadu from Nigeria.", "I am a Frontend Webdeveloper.", "I love to write Code."]
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count ++;
        index = 0;
    }
    setTimeout(type, 200);
    texts.style.color = 'blue';
}());

