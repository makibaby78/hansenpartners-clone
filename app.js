const btnsidebar = document.querySelector('.sidebar-btn');
const closesidebar = document.querySelector('.sidebar-close');
const sidebar = document.querySelector('.sidebar');

btnsidebar.addEventListener('click', sidebarResponsive);
closesidebar.addEventListener('click', sidebarResponsive);

function sidebarResponsive(){
    if(sidebar.classList.contains('hide')) {
        sidebar.classList.remove("hide")
    }else{
        sidebar.classList.add("hide")
    }
};

// On scroll

const header = document.querySelector('.header');
const searchbar = document.querySelector('.show-onscroll');
let scrollLastVal = 0;

function scrolling(){
    let scrollDetector = window.scrollY;

    if(window.scrollY>=100){
        header.classList.add('bg-black');
    }else{
        header.classList.remove('bg-black');
    }

    if(window.scrollY>=610){
        searchbar.classList.remove('hidden');
    }else{
        searchbar.classList.add('hidden');
    }

    if(window.scrollY>=437){
        if(scrollLastVal<scrollDetector){
            header.style.top = "-110px";
            searchbar.style.top = "0";
        }else{
            header.style.top = "0";
            searchbar.style.top = "98px";
        }
    }

    scrollLastVal = scrollDetector;
}
scrolling()

window.addEventListener('scroll', ()=>{
    scrolling()
})

// modal

const modalbtn = document.querySelectorAll('.modal-btn');
const modalclose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal')

for(let x=0;x<modalbtn.length;x++){
    modalbtn[x].addEventListener('click', modalactivation);
}

modalclose.addEventListener('click', modalactivation);

function modalactivation(){
    if(modal.classList.contains('hidden')) {
        modal.classList.remove("hidden")
    }else{
        modal.classList.add("hidden")
    }
};