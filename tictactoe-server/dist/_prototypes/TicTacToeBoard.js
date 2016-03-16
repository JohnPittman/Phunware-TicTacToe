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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TicTacToeBoard = function () {
    function TicTacToeBoard(boardSize) {
        _classCallCheck(this, TicTacToeBoard);

        this._boardSize = null;
        this._grid = null;
        this._moveCount = null;

        this.init(boardSize);
    }

    _createClass(TicTacToeBoard, [{
        key: 'init',
        value: function init(boardSize) {
            this.boardSize = boardSize;
            this.grid[boardSize - 1] = undefined;
            this._moveCount = 0;

            return this;
        }
    }, {
        key: 'dispose',
        value: function dispose() {
            var grid = this.grid;
            while (grid.length > 0) {
                grid.pop();
            }
        }
    }, {
        key: '_checkBounds',
        value: function _checkBounds(row, col) {
            if (row > this.boardSize) throw new Error('Row index out of bound: ' + row + ' > ' + this.boardSize);else if (col > this.boardSize) throw new Error('Row index out of bound: ' + col + ' > ' + this.boardSize);
        }
    }, {
        key: 'insertItem',
        value: function insertItem(item, rowNum, colNum) {
            this._checkBounds(rowNum, colNum);

            var rowIndex = (rowNum - 1) * this.boardSize;
            var colIndex = rowIndex + (colNum - 1);

            this.grid[colIndex] = item;

            this._moveCount++;
        }
    }, {
        key: 'lookAtItem',
        value: function lookAtItem(rowNum, colNum) {
            this._checkBounds(rowNum, colNum);

            var rowIndex = (rowNum - 1) * this.boardSize;
            var colIndex = rowIndex + (colNum - 1);

            return this.grid[colIndex];
        }
    }, {
        key: 'checkBoard',
        value: function checkBoard() {
            var result = false;
            var boardSize = this.boardSize;
            var i = 0;
            for (; i < boardSize; i++) {
                result = this._checkRow(i);

                if (result) break;

                result = this._checkColumn(i);

                if (result) break;
            }

            if (!result) result = this._checkCriss();
            if (!result) result = this._checkCross();

            if (result === undefined) result = false;

            return result;
        }

        /**
        For the logic to check winner you can defintely use strings or even
        add two matices together and then add the rows and column which
        would be an easier approach but I need to move on and this works for now.
        */

        /**
        111
        000
        000
        */

    }, {
        key: '_checkRow',
        value: function _checkRow(rowNum) {
            var boardSize = this.boardSize;
            var i = 2;
            var result = false;

            var prevItem = this.lookAtItem(rowNum, 1);
            for (; i <= boardSize;) {
                result = this.lookAtItem(rowNum, i);

                if (result !== prevItem) {
                    result = false;
                    break;
                }

                prevItem = result;

                ++i;
            }

            if (result === undefined) {
                result = false;
            }

            return result;
        }

        /**
        100
        100
        100
        */

    }, {
        key: '_checkColumn',
        value: function _checkColumn(colNum) {
            var boardSize = this.boardSize;
            var i = 2;
            var result = false;

            var prevItem = this.lookAtItem(1, colNum);
            for (; i <= boardSize;) {
                result = this.lookAtItem(i, colNum);

                if (result !== prevItem) {
                    result = false;
                    break;
                }

                prevItem = result;

                ++i;
            }

            if (result === undefined) {
                result = false;
            }

            return result;
        }

        /**
        100
        010
        001
        */

    }, {
        key: '_checkCross',
        value: function _checkCross(grid) {
            var boardSize = this.boardSize;
            var i = 2;
            var result = false;

            var prevItem = this.lookAtItem(1, 1);
            for (; i <= boardSize;) {
                result = this.lookAtItem(i, i);

                if (result !== prevItem) {
                    result = false;
                    break;
                }

                prevItem = result;

                ++i;
            }

            if (result === undefined) {
                result = false;
            }

            return result;
        }

        /**
        001
        010
        100
        */

    }, {
        key: '_checkCriss',
        value: function _checkCriss(grid) {
            var boardSize = this.boardSize;
            var x = 1;
            var y = this.boardSize;
            var result = false;

            var prevItem = this.lookAtItem(y, x);
            ++x;
            --y;
            for (; x <= boardSize;) {
                result = this.lookAtItem(y, x);

                if (result !== prevItem) {
                    result = false;
                    break;
                }

                prevItem = result;

                ++x;
                --y;
            }

            if (result === undefined) {
                result = false;
            }

            return result;
        }

        /**
        @method grid
        @return {array}
        */

    }, {
        key: 'full',
        get: function get() {
            return this._moveCount === this.boardSize * this.boardSize;
        }
    }, {
        key: 'grid',
        get: function get() {
            if (this._grid === null) {
                this._grid = [];
                this._grid[this.boardSize * this.boardSize - 1] = undefined;
            }

            return this._grid;
        }

        /**
        @method grid
        @param {array} value
        */
        ,
        set: function set(value) {
            this._grid = value;
        }

        /**
        @method boardSize
        @return {number}
        */

    }, {
        key: 'boardSize',
        get: function get() {
            return this._boardSize;
        }

        /**
        @method boardSize
        @param {number} value
        */
        ,
        set: function set(value) {
            this._boardSize = value;
        }
    }]);

    return TicTacToeBoard;
}();

exports.default = TicTacToeBoard;