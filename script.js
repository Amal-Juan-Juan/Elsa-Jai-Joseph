const navToggle=document.querySelector('.dash-lines')
const navLinks=document.querySelectorAll('.nav-link')
navToggle.addEventListener('click',()=>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(llink=>{
    llink.addEventListener('click',()=>{
        document.body.classList.remove('nav-open');
    })
})
const panels=document.querySelectorAll('.panel')
panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

const contents=document.querySelectorAll('.content')
window.addEventListener('scroll',checkboxes)
checkboxes()
function checkboxes(){
    const triggerBottom=window.innerHeight/7*4

contents.forEach(content=>{
    const contentTop=content.getBoundingClientRect().top
    if(contentTop<triggerBottom){
        content.classList.add('show')
    } else{
        content.classList.remove('show')
    } 
    })
}