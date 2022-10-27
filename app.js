const quotes = document.querySelectorAll('.introContent p');

const button = document.querySelector('button');

// const quoteDisappear = () => {
//     setTimeout(() => {
//         quotes.style.opacity = 0;
//         quotes.style.transition = "opacity, 1s"
//     }, 1000)
// };

// This makes the GarDel h1 disappear and then appear
// const gardelH1 = document.querySelector('h1');

// window.addEventListener('load', () => {
//     gardelH1.style.opacity = 0;
//     gardelH1.style.transition = "opacity, 3s";
//     setTimeout(() => {
//         gardelH1.style.opacity = 1;
//         gardelH1.style.trasition = "opacity, 3s"
//     }, 3000)
// });

// This makes the quotes disappear and then appear again
// window.addEventListener('load', () => {
//     for (let quote of quotes) {
//         quote.style.opacity = 0;
//         quote.style.transition = "opacity, 3s";
//         setTimeout(() => {
//             quote.style.opacity = 1;
//             quote.style.trasition = "opacity, 3s"
//         }, 3000)
//     }
// });

// trying to do it with a loop

window.addEventListener('load', () => {
    for (let quote of quotes) {
        quote.style.opacity = 0;
        quote.style.transition = "opacity, 3s";
        quote.style.color = '#F8333C';
        setTimeout(() => {
            quote.style.opacity = 1;
            quote.style.trasition = "opacity, 3s"
            quote.style.color = '#2B9EB3';
        }, 3000)
    }
});

const gardelLogo = document.querySelector('#gardelLogo');

// checking to see if multiple window eventListeners will fire
window.addEventListener('load', () => {
    console.log("this works too");
})

const bkgdImg1 = document.querySelector('#bkgdImg1');
bkgdImg1.style.opacity = 0.5;



