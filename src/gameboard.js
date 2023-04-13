import ship from "./ships";
const gameboard = () => {
    let board = [];
    let rows = 7;
    let columns = 7;
    let shipCount = 1;
    let shipsArr = [ship(3), ship(2), ship(1), ship(1),ship(1)];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++ )
        board[i][j] = {ship: false, attacked: false};

    };

    const attackBoard = (x, y) => {
        console.log(x);
        console.log(y);
        if(board[x][y].attacked != false){
            console.log('return')
            return;
        }
        else if(board[x][y].ship === true && board[x][y].attacked == false){
            board[x][y].attacked = true;
            board[x][y].newShip.hit();
            currentScore(board[x][y].newShip.isSunk());
        }
        else{
        board[x][y].attacked = true;

        }
    }

    const getBoard = () => board;

    const placeShip = (fakeX, fakeY) => {
        shipsArr.forEach( s => {
            let x = Math.floor(Math.random() * 4) + 1;
            let y = Math.floor(Math.random() * 4) + 1;
            let j = 0;
            let shipSize = s.getLength();
            while(j < shipSize){
            board[x][y++] = {ship: true, attacked: false, s}
            j++;
          }
        })
      }


    const currentScore = (ship) => {

        if(ship === true){
            shipCount--;
        }
        if(shipCount === 0){
            console.log('game over')
        }
    }



    return {
        getBoard,
        attackBoard,
        placeShip
    }
}

export default gameboard;
