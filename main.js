// EXERCISE 1: LOOPING A TRIANGLE

// for (let result = "#"; result.length < 8; result += "#") {
//     console.log(result);
// }

// EXERCISE 2: FizzBuzz

// for (let num = 1; num <= 100; num += 1) {
//     if (num % 3 == 0 && num % 5 > 0) {
//         console.log("Fizz", num);
//     } else if (num % 5 == 0 && num % 3 > 0) {
//         console.log("Buzz", num);
//     } else if (num % 5 == 0 && num % 3 == 0) {
//         console.log("FizzBuzz", num);
//     } else {
//         console.log(num);
//     };
// }

// EXERCISE 3: Chessboard

// let size = prompt();
// let result = "";

// for (let counter = 0; counter < size; counter++) {
//     for (let counter2 = 0; counter2 < size; counter2++) {
//         if ((counter + counter2) % 2 > 0) {
//             result += " ";
//         } else {
//             result += "#";
//         };
//     };
    
//     result += "\n";
// };

// console.log(result)


// EXPLORING THE POSSIBILITIES OF DOM API

// changing the title of an html document using js

// let heading = document.querySelector("#main-heading");

// heading.addEventListener("click", () => {
//     console.log("You clicked the heading");
// });

// // document.querySelector(".highlight").addEventListener("click", () => { console.log("Clicked on the <em> tag") });
// // document.querySelector("body").addEventListener("click", () => { console.log("Clicked on the body tag.") });

// function updateElement(element, desiredText=null) {
//     element.textContent = desiredText;
// }

// document.querySelector(".important").addEventListener("click", () => { updateElement(heading, "H2 with important class was clicked!!!") })

let wordlist = document.querySelector("#word-list");
let sentence = document.querySelector("#sentence");

wordlist.addEventListener("click", event => {
    let word = event.target.textContent;
    sentence.textContent += word;
    sentence.textContent += " ";
});

let box = document.querySelector("#box");

// document.querySelector("html").addEventListener("mousemove", 
//     e => {
//         box.style.display = 'block';
//         box.style.position = 'fixed';
//         box.style.left = e.clientX + 10 + 'px';
//         box.style.top = e.clientY - 15 + 'px';
// });

let currentX = 0;
let currentY = 0;

document.querySelector("html").addEventListener("keydown", e => {
    if (e.repeat == false) {
        if (e.key == "w") {
            currentY -= 20;
        } else if (e.key == "a") {
            currentX -= 20;
        } else if (e.key == "s") {
            currentY += 20;
        } else if (e.key == "d") {
            currentX += 20;
        }
    };

    box.style.display = 'block';
    box.style.position = 'fixed';
    box.style.left = currentX + 'px';
    box.style.top = currentY + 'px';
});