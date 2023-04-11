const gameboard = () => {
    let board = [];

    let spaces = 47;

    for(let i = 0; i < spaces; i++){
        board[i] = {ship: false, attacked: false};
    };

    const attackBoard = (position) => {
        if(board[position].attacked != false){
            return;
        }
        else if(board[position].ship === true && board[position].attacked == false){
            board[position] = true;
        }
        board[position].attacked = true;
    }

    const getBoard = () => board;



    return {
        getBoard,
        attackBoard
    }
};

export default gameboard;
