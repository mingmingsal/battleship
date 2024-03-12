class Ship {

    //Length = how many tiles a ship takes
    //Hits = an array containing where the ship got hit
    //isSunk = if number of hits is equal to the length, it is sunk
    constructor(length, hits) {
        this.length = length;
        this.hits = hits
        this.sunk = false;
    }

    hit() {
        this.hits++;
    }
    isSunk() {
        if (this.hits === this.length) {
            sunk = true;
        }
    }
}

class Gameboard {
    constructor(boardSize) {
        //Board stores where has been hit
        this.board = () => {
            let arr = [];
            for (let x = 0; x < boardSize; x++) {
                for (let y = 0; y < boardSize; y++) {
                    arr[x].push(null);
                }
            }
        }

    }
    receiveAttack(x, y) {
        switch (this.board[x][y]) {
            case null:
                this.board[x][y] = "miss";
                break;
            case "miss":
                return false;
            case "ship":
            //pseudo code ship hit
            default:
                return false;
        }
    }
    placeShip(x,y,length,direction){
        if(direction==="horizontal"){
            for(let i = 0;i<length;i++){
                if(this.board[x+i][y]=="ship"){
                    return false;
                }
            }
            for(let i = 0;i<length;i++){
                this.board[x+i][y]=="ship"
            }
        }
        else if(direction==="vertical"){
            for(let i = 0;i<length;i++){
                if(this.board[x][y+i]=="ship"){
                    return false;
                }
            }
            for(let i = 0;i<length;i++){
                this.board[x][y+i]=="ship"
            }
        }
        
    }
}