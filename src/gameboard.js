import ship from "./ships";
const gameboard = () => {
    let board = [];
    let rows = 7;
    let columns = 7;
    let spaces = 47;

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
        }
        else{
        board[x][y].attacked = true;
        }
    }

    const getBoard = () => board;

    const placeShip = (x, y) => {
        let shipSize = Math.floor(Math.random() * 4) + 1;
        let newShip = ship(shipSize);
        let i = 0;
        while(i < shipSize){
        board[x][y++] = {ship: true, attacked: false, newShip}
        i++;
        }

    }


    return {
        getBoard,
        attackBoard,
        placeShip
    }
};

export default gameboard;
