const test = require('./src/game.js');

/*
it('Make Ship', () => {
    const bill = new test.Ship(5);
    expect(bill.length).toBe(5);
})
it('Make Board', () => {
    const gm = new test.Gameboard(7);
    expect(gm.board).toStrictEqual(
        [ [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ]]
    );
})
it('Place Ship', () => {
    const bill = new test.Ship(3);
    const gm = new test.Gameboard(7);
    expect(gm.placeShip(0, 0, bill, "horizontal")).toStrictEqual(
        [ [ bill, null, null, null, null, null, null ], [ bill, null, null, null, null, null, null ], [ bill, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ]]
    );
})

it('Hit Empty Space', () => {
    const gm = new test.Gameboard(7);
    
    expect(gm.receiveAttack(3,3)).toStrictEqual(
        [ [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, "miss", null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ]]
    );
})
*/
it('Hit Ship', () => {
    const gm = new test.Gameboard(7);
    const bill = new test.Ship(3);
    gm.placeShip(3, 3, bill, "horizontal")
    
    expect(gm.receiveAttack(3,3)).toStrictEqual(
        [ [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, null, null, null, null ], [ null, null, null, "hit", null, null, null ], [ null, null, null, bill, null, null, null ], [ null, null, null, bill, null, null, null ], [ null, null, null, null, null, null, null ]]
    );
})
it('Hit Ship and Sunk', () => {
    const gm = new test.Gameboard(7);
    const bill = new test.Ship(3);
    gm.placeShip(3, 3, bill, "horizontal")
    gm.receiveAttack(3,3);
    gm.receiveAttack(4,3)
    gm.receiveAttack(5,3)
    expect(bill.sunk).toStrictEqual(
        true
    );
})