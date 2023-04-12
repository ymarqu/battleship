import gameboard from "./gameboard";
import './screen.css'
let game = gameboard();

let container = document.createElement('div');


game.placeShip(3,1);

let uppdateBord = () => {
container.innerHTML = '';
for(let i = 0; i < game.getBoard().length; i++){
    for(let j = 0; j < game.getBoard()[i].length; j++){
        let btn = document.createElement('button');
        if(game.getBoard()[i][j].ship == true){
            btn.classList.add('has-ship');
        }
        if(game.getBoard()[i][j].attacked == true){
            btn.classList.add('attacked');
            btn.disabled = true;
        }
        btn.dataset.x = i;
        btn.dataset.y = j;
        container.appendChild(btn);
    }
    let next = document.createElement('br');
    container.appendChild(next);
 }
 let btns = container.querySelectorAll('button');
 btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        console.log(e.target)
        let xCoor = parseInt(e.target.dataset.x);
        let yCoor = parseInt(e.target.dataset.y);
        game.attackBoard(xCoor, yCoor);
        uppdateBord();
    })
})
}


uppdateBord();





export default container;
