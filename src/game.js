class Ship {

    //Length = how many tiles a ship takes
    //Hits = an array containing where the ship got hit
    //isSunk = if number of hits is equal to the length, it is sunk
    constructor(length, hits){
        this.length = length;
        this.hits = () => {
            const arr = []
            for(let i = 0;i < hits,i++){
                arr.push(false);
            };
            return arr;
        }
        this.sunk = false;
    }

    hit(location){
        hit++;
    }
    isSunk(){
        if (this.hits === this.length){
            sunk=true;
        }
    }
}

class Gameboard {
    constructor(boardSize){
        this.board = () => {
            let arr = [];
            for (let y = 0;y<boardSize;y++){
                for (let x = 0;x<boardSize;x++){
                    arr[x].push(null);
                }
            }
        }
    }
}