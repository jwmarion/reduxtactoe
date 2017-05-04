

// function sketelon(){
//     ______
//   /        \
//   | 0   0   |
//   \       //
//   /_|_|_|_\
//   \|_|_|_|/
//
// }




export default function reducer(state=
{
  board: [null, null, null, null, null, null, null, null, null],
  player: 1,
  continue: true,
  lastClicked: -1,
  msg: 'Tic Tac Toe!'
}, action){
  if (action.type === 'click' && state.board[action.value]=== null){
    let b = state.board.slice(0,action.value)

    if (state.player === 1){
      b.push(1);
    }else{
      b.push(-1);
    }
    // let winMsg = "Tic Tac Toe"
    let c = state.board.slice(action.value+1,state.board.length);
    let winMsg;
    let cont;
    console.log(b.concat(c)[0]);
    if(
          Math.abs(b.concat(c)[0] + b.concat(c)[1] + b.concat(c)[2]) === 3 ||
          Math.abs(b.concat(c)[3] + b.concat(c)[4] + b.concat(c)[5]) === 3 ||
          Math.abs(b.concat(c)[6] + b.concat(c)[7] + b.concat(c)[8]) === 3 ||
          Math.abs(b.concat(c)[0] + b.concat(c)[3] + b.concat(c)[6]) === 3 ||
          Math.abs(b.concat(c)[1] + b.concat(c)[4] + b.concat(c)[7]) === 3 ||
          Math.abs(b.concat(c)[2] + b.concat(c)[5] + b.concat(c)[8]) === 3 ||
          Math.abs(b.concat(c)[0] + b.concat(c)[4] + b.concat(c)[8]) === 3 ||
          Math.abs(b.concat(c)[2] + b.concat(c)[4] + b.concat(c)[6]) === 3 ){
            console.log('before winner')
            if (state.player === -1 ){
              winMsg = 'O Wins!';
              console.log('O wins')
            }
            else{
              winMsg = 'X Wins!';
              console.log('X wins')
            }
            cont = false;
          }
          else{
            winMsg = "Tic Tac Toe!"
            cont = true;
          }
          // //check draw
          // var end = 0;
          // //state.board.forEach((square)=>{if(square === null){end +=1;}});
          //
          // if (end === 0){
          //   this.setState({msg: "Draw!", endGame: true});
          // }





    return Object.assign ({}, state, {
      lastClicked: "X",
      board: b.concat(c),
      player: state.player * -1,
      msg: winMsg,
      continue: cont
    })
  }
  else{ if(action.type === 'reset'){
    return Object.assign ({}, state, {
      board: [null, null, null, null, null, null, null, null, null],
      player: 1,
      continue: true,
      lastClicked: -1,
      msg: "Tic Tac Toe!"
    })
  }
    else{
    return state;
    }
  }
}


// function sketelon(){
//     ______
//   /        \
//   | 0   0   |
//   \       //
//   /_|_|_|_\
//   \|_|_|_|/
//        | |
// }      | |
