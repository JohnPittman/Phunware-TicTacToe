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

export default class TicTacToeBoard {
    constructor(boardSize) {
        this._boardSize = null;
        this._grid = null;
        this._moveCount = null;

        this.init(boardSize);
    }

    init(boardSize) {
        this.boardSize = boardSize;
        this.grid[boardSize - 1] = undefined;
        this._moveCount = 0;

        return this;
    }

    dispose() {
        let grid = this.grid;
        while (grid.length > 0) {
            grid.pop();
        }
    }

    _checkBounds(row, col) {
        if (row > this.boardSize)
            throw new Error(`Row index out of bound: ${row} > ${this.boardSize}`);
        else if (col > this.boardSize)
            throw new Error(`Row index out of bound: ${col} > ${this.boardSize}`);
    }

    insertItem(item, rowNum, colNum) {
        this._checkBounds(rowNum, colNum);

        let rowIndex = (rowNum - 1) * this.boardSize;
        let colIndex = rowIndex + (colNum - 1);

        this.grid[colIndex] = item;

        this._moveCount++;
    }

    lookAtItem(rowNum, colNum) {
        this._checkBounds(rowNum, colNum);

        let rowIndex = (rowNum - 1) * this.boardSize;
        let colIndex = rowIndex + (colNum - 1);

        return this.grid[colIndex];
    }

    get full() {
        return this._moveCount === this.boardSize * this.boardSize;
    }

    checkBoard() {
        var result = false;
        const boardSize = this.boardSize;
        let i = 0;
        for (; i < boardSize; i++) {
            result = this._checkRow(i);

            if (result)
                break;

            result = this._checkColumn(i);

            if (result)
                break;
        }

        if (!result)
            result = this._checkCriss();
        if (!result)
            result = this._checkCross();

        if (result === undefined)
            result = false;

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
    _checkRow(rowNum) {
        const boardSize = this.boardSize;
        let i = 2;
        let result = false;

        let prevItem = this.lookAtItem(rowNum, 1);
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
            result = false
        }

        return result;
    }

    /**
    100
    100
    100
    */
    _checkColumn(colNum) {
        let boardSize = this.boardSize;
        let i = 2;
        let result = false;

        let prevItem = this.lookAtItem(1, colNum);
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
            result = false
        }

        return result;
    }

    /**
    100
    010
    001
    */
    _checkCross(grid) {
        let boardSize = this.boardSize;
        let i = 2;
        let result = false;

        let prevItem = this.lookAtItem(1, 1);
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
            result = false
        }

        return result;
    }

    /**
    001
    010
    100
    */
    _checkCriss(grid) {
        let boardSize = this.boardSize;
        let x = 1;
        let y = this.boardSize;
        let result = false;

        let prevItem = this.lookAtItem(y, x);
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
            result = false
        }

        return result;
    }

    /**
    @method grid
    @return {array}
    */
    get grid() {
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
    set grid(value) {
        this._grid = value;
    }

    /**
    @method boardSize
    @return {number}
    */
    get boardSize() {
        return this._boardSize;
    }

    /**
    @method boardSize
    @param {number} value
    */
    set boardSize(value) {
        this._boardSize = value;
    }
}