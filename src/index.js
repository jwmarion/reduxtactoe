import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import TTT from './TTT';
import reducer from './TTT.reducer';
// ReactDOM.render(
//   document.getElementById('root')
// );
const Initial_state = ({
  board: [null, null, null, null, null, null, null, null, null],
  player: 1,
  continue: true,
  lastClicked: -1,
  msg: "Tic Tac Toe!"
});

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const TTTContainer =
ReactRedux.connect(
  state=>({
    board: state.board,
    player: state.player,
    continue: state.continue,
    lastClicked: state.lastClick,
    msg: state.msg
  }),
  dispatch => ({
    click: (idx) => dispatch({
      type: 'click',
      value: idx
    }),
    reset: ()=> dispatch({
      type: 'reset'
    })
  })
)(TTT)

function display() {
  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <TTTContainer/>
    </ReactRedux.Provider>,
    document.getElementById('root')
  );
}

store.subscribe(display);
display();
