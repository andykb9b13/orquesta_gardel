// const quotes = document.querySelectorAll('.introContent p');

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

// trying to do it one at a time
window.addEventListener('load', () => {
    let quote1 = document.querySelector("#quote1")
    quote1.style.opacity = 1;
    quote1.style.transition = "opacity, 1s";
});

window.addEventListener('load', () => {
    let quote2 = document.querySelector("#quote2")
    setTimeout(() => {
        quote2.style.opacity = 1;
        quote2.style.transition = "opacity, 1s";
    }, 1000)
});

window.addEventListener('load', () => {
    let quote3 = document.querySelector("#quote3")
    setTimeout(() => {
        quote3.style.opacity = 1;
        quote3.style.transition = "opacity, 1s";
    }, 2000)
});

const h1 = document.querySelector('h1');

window.addEventListener('load', () => {
    h1.style.letterSpacing = '30px';
    h1.style.transition = "letterSpacing, 2s";
    h1.style.fontSize = '100px';
    h1.style.transition = "fontSize, 2s";
    h1.style.fontWeight = '300';
    h1.style.transition = "fontWeight, 2s";
});
