
import React from 'react';

export default class TTT extends React.Component{
  render() {
    let cont;
    if (!this.props.continue){
      cont=(<button className='reset' onClick={()=>this.props.reset()}>reset</button>);
    }
    else{
      cont= null;
    }
console.log(this.props);
    return (
      <div className="game">
    <div className="top">
      <h1 className="message">{this.props.msg}</h1>
    </div>
    <div className="grid">
      {this.props.board.map((val,i)=>
         <div className="box" onClick={()=>this.props.click(i)}key={i}>{this.props.board[i]===1?'X':this.props.board[i]===-1?'O':null}</div>)}
     </div>
     {cont}
  </div>)

  }

}
// onClick={()=>this.change(i)} key={i}>{this.state.board[i] === -1 ? 'X' : this.state.board[i] === 1 ? 'O' : null}


// <div className="box" onClic1k={()=>this.change(i)} key={i}>{this.state.board[i] === -1 ? 'X' : this.state.board[i] === 1 ? 'O' : null}</div>)}
//if (action.type === 'select') {
    // return Object.assign({}, state, {
    //   currentIndex: action.index
    // });
