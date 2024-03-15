console.log('hello');
const sidebarToggleButton = document.querySelector('#box');
const sibarMenu = document.querySelector('#sidebar-menu')







const toggle = function(){
    sidebarToggleButton.addEventListener('click',()=>{
    
        sibarMenu.classList.toggle('hidden')
    })

    
   
}


toggle();


