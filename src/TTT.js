
import React from 'react';

export default class TTT extends React.Component{
  render() {
console.log(this.props);
    return (
      <div className="game">
    <div className="top">
      <h1 className="message"></h1>
    </div>
    <div className="grid">
      {this.props.board.map((val,i)=>
         <div className="box" key={i}></div>)}
     </div>
  </div>)

  }

}
// onClick={()=>this.change(i)} key={i}>{this.state.board[i] === -1 ? 'X' : this.state.board[i] === 1 ? 'O' : null}
