/**
@license
The MIT License (MIT)

Copyright (c) 2016 John Pittman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

import {
    createStore
}
from 'redux';
import {
    Map
}
from 'immutable';

import GameService from './../services/GameService.js';

const stateDefaults = {
    started: false,
    newGame: true,
    ended: false,
    winner: null,
    currentPlayer: 'X',
    board: [],
    numBoardCols: 0,
    draw: false
};

const reducer = function(state = stateDefaults, action) {
    switch (action.type) {
        case 'Turn':
            if (state.board[action.state.selectedIndex] === null) {
                state.board[action.state.selectedIndex] = state.currentPlayer
                state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

                if (state.started === true) {
                    GameService.checkForWinner();
                }
            }
            break;
        case 'EndGame':
            state.started = false;
            state.ended = true;
            state.winner = action.state.winner;
            //state.board = [];
            break;
        case 'NewGame':
            state.started = true;
            state.ended = false;
            state.winner = null;
            state.draw = false;
            state.currentPlayer = 'X';
            state.numBoardCols = action.state.numBoardCols;
            state.board = [];
            for (let i = 0, n = state.numBoardCols * state.numBoardCols; i < n; i++) {
                state.board.push(null);
            }
            break;
        default:
    }

    return state;
}

export default createStore(reducer);