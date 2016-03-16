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

import TicTacToeBoard from './TicTacToeBoard.js';

export default class TicTacToe {
    constructor(boardSize) {
        this._board = null;
        this._maxPlayers = 2;
        this._players = null;
        this._started=null;
        this._ended=null;

        this.init(boardSize);
    }

    init(boardSize) {
        // Set the width and height to square.
        this.board = new TicTacToeBoard(boardSize, boardSize);
        this.players = [];

        return this;
    }

    dispose() {}

    getPlayerCount() {
        return this.player.length;
    }

    /**
    @method started
    @return {boolean}
    */
    get started() {
        return this._started;
    }
    
    /**
    @method started
    @param {boolean} value
    */
    set started(value) {
        this._started = value;
    }

    /**
    @method ended
    @return {boolean}
    */
    get ended() {
        return this._ended;
    }
    
    /**
    @method ended
    @param {boolean} value
    */
    set ended(value) {
        this._ended = value;
    }

    /**
    @method maxPlayers
    @return {number}
    */
    get maxPlayers() {
        return this._maxPlayers;
    }

    /**
    @method maxPlayers
    @param {number} value
    */
    set maxPlayers(value) {
        this._maxPlayers = value;
    }

    /**
    @method board
    @return {Board}
    */
    get board() {
        return this._board;
    }

    /**
    @method board
    @param {Board} value
    */
    set board(value) {
        this._board = value;
    }

    /**
    @method players
    @return {array}
    */
    get players() {
        return this._players;
    }

    /**
    @method players
    @param {array} value
    */
    set players(value) {
        this._players = value;
    }
}