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

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TicTacToeBoard = require('./TicTacToeBoard.js');

var _TicTacToeBoard2 = _interopRequireDefault(_TicTacToeBoard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TicTacToe = function () {
    function TicTacToe(boardSize) {
        _classCallCheck(this, TicTacToe);

        this._board = null;
        this._maxPlayers = 2;
        this._players = null;
        this._started = null;
        this._ended = null;

        this.init(boardSize);
    }

    _createClass(TicTacToe, [{
        key: 'init',
        value: function init(boardSize) {
            // Set the width and height to square.
            this.board = new _TicTacToeBoard2.default(boardSize, boardSize);
            this.players = [];

            return this;
        }
    }, {
        key: 'dispose',
        value: function dispose() {}
    }, {
        key: 'getPlayerCount',
        value: function getPlayerCount() {
            return this.player.length;
        }

        /**
        @method started
        @return {boolean}
        */

    }, {
        key: 'started',
        get: function get() {
            return this._started;
        }

        /**
        @method started
        @param {boolean} value
        */
        ,
        set: function set(value) {
            this._started = value;
        }

        /**
        @method ended
        @return {boolean}
        */

    }, {
        key: 'ended',
        get: function get() {
            return this._ended;
        }

        /**
        @method ended
        @param {boolean} value
        */
        ,
        set: function set(value) {
            this._ended = value;
        }

        /**
        @method maxPlayers
        @return {number}
        */

    }, {
        key: 'maxPlayers',
        get: function get() {
            return this._maxPlayers;
        }

        /**
        @method maxPlayers
        @param {number} value
        */
        ,
        set: function set(value) {
            this._maxPlayers = value;
        }

        /**
        @method board
        @return {Board}
        */

    }, {
        key: 'board',
        get: function get() {
            return this._board;
        }

        /**
        @method board
        @param {Board} value
        */
        ,
        set: function set(value) {
            this._board = value;
        }

        /**
        @method players
        @return {array}
        */

    }, {
        key: 'players',
        get: function get() {
            return this._players;
        }

        /**
        @method players
        @param {array} value
        */
        ,
        set: function set(value) {
            this._players = value;
        }
    }]);

    return TicTacToe;
}();

exports.default = TicTacToe;