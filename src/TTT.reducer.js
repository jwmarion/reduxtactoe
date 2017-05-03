export default function reducer(state=
{
  board: [null, null, null, null, null, null, null, null, null],
  player: 1,
  continue: true,
  lastClicked: -1
}, action){
  if (action.type === 'click'){
    if (this.player === 1){
    let z = this.board;
    z[this.lastClicked] = "X";
    return Object.assign ({}, state, {
      lastClicked: "X",
      board: z
    })
  }
    else{
      this.board[this.lastClicked] = "O";
    }
    this.player = this.player *-1;
  }
  return state;
}
