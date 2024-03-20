console.log('hello');
const sidebarToggleButton = document.querySelector('#box');
const sibarMenu = document.querySelector('#sidebar-menu')
const overlay = document.querySelector('.overlay-selector')






overlay.addEventListener('click', () => {
    sibarMenu.classList.add('hidden')
})


document.addEventListener("scroll", (event) => {
    if (overlay.scrollY) {
        sibarMenu.classList.add('hidden')
    }


});

// scrol.addEventListener("scroll", (event) => {
//    console.log( "Scroll event fired!");
//     setTimeout(() => {
//       console.log( "Waiting on scroll events...");
//     }, 1000);
//   });


const toggle = function () {

    sibarMenu.classList.toggle('hidden')

}


sidebarToggleButton.addEventListener('click', toggle)

