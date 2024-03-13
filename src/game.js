class Ship {

    //Length = how many tiles a ship takes
    //Hits = an array containing where the ship got hit
    //isSunk = if number of hits is equal to the length, it is sunk
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        if(!this.sunk){
            this.hits++;
            this.isSunk();
        return this.hits;
        }
        
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }

}

class Gameboard {
    constructor(boardSize) {
        //Board stores where has been hit
        this.boardSize = boardSize;
        this.board = this.initBoard(boardSize);
        
    }
    initBoard(boardSize){
        return [...Array(boardSize)].map(() => Array(boardSize).fill(null));

    }

    receiveAttack(x, y) {
        if(this.board[x][y]===null){
            this.board[x][y] = "miss";
        }
        else if (this.board[x][y] === "miss"){
            throw new Error('Space already hit')
        }  
        else if((typeof this.board[x][y])==="object"){
            this.board[x][y].hit();
            this.board[x][y]="hit";
    }
        else throw new Error('Invalid Space')
        
        return this.board;
    }
    placeShip(x,y,ship,direction){
        if(direction==="horizontal"){
            for(let i = 0;i<ship.length;i++){
                if(this.board[x+i][y]!==null){
                    return false;
                }
            }
            for(let i = 0;i<ship.length;i++){
                this.board[x+i][y]= ship;
            }
        }
        else if(direction==="vertical"){
            for(let i = 0;i<ship.length;i++){
                if(this.board[x][y+i]!==null){
                    return false;
                }
            }
            for(let i = 0;i<ship.length;i++){
                this.board[x][y+i]=ship
            }
        }
        return this.board;
    }
}
module.exports = {Gameboard,Ship};