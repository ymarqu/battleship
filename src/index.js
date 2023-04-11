import gameboard from "./gameboard.js";
let content = document.querySelector('#content');

let board = gameboard();

console.log(board.getBoard());

content.innerHTML = 'hello';
