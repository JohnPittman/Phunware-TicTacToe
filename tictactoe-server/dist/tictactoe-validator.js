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

function TicTacToeValidator() {};

TicTacToeValidator.lookAtItem = function (board, numCols, rowIndex, colIndex) {
    var index = rowIndex * numCols + colIndex;

    return board[index];
};

TicTacToeValidator.isBoardFull = function (board) {
    var result = true;
    var i = 0;
    var n = board.length;

    for (; i < n; i++) {
        if (board[i] === null) {
            result = false;
            break;
        }
    }

    return result;
};

TicTacToeValidator.checkBoard = function (board, numCols) {
    var result = null;
    var i = 0;
    for (; i < numCols; i++) {
        result = TicTacToeValidator.checkRow(board, numCols, i);

        if (result) break;

        result = TicTacToeValidator.checkColumn(board, numCols, i);

        if (result) break;
    }

    if (!result) result = TicTacToeValidator.checkCriss(board, numCols);
    if (!result) result = TicTacToeValidator.checkCross(board, numCols);

    return result;
};

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
TicTacToeValidator.checkRow = function (board, numCols, rowIndex) {
    var i = 1;
    var result = null;

    var prevItem = TicTacToeValidator.lookAtItem(board, numCols, rowIndex, 0);
    for (; i < numCols;) {
        result = TicTacToeValidator.lookAtItem(board, numCols, rowIndex, i);

        if (result !== prevItem) {
            result = null;
            break;
        }

        prevItem = result;

        ++i;
    }

    return result;
};

/**
100
100
100
*/
TicTacToeValidator.checkColumn = function (board, numCols, colIndex) {
    var i = 1;
    var result = null;

    var prevItem = TicTacToeValidator.lookAtItem(board, numCols, 0, colIndex);
    for (; i < numCols;) {
        result = TicTacToeValidator.lookAtItem(board, numCols, i, colIndex);

        if (result !== prevItem) {
            result = null;
            break;
        }

        prevItem = result;

        ++i;
    }

    return result;
};

/**
100
010
001
*/
TicTacToeValidator.checkCross = function (board, numCols) {
    var i = 1;
    var result = null;

    var prevItem = TicTacToeValidator.lookAtItem(board, numCols, 0, 0);
    for (; i < numCols;) {
        result = TicTacToeValidator.lookAtItem(board, numCols, i, i);

        if (result !== prevItem) {
            result = null;
            break;
        }

        prevItem = result;

        ++i;
    }

    return result;
};

/**
001
010
100
*/
TicTacToeValidator.checkCriss = function (board, numCols) {
    var x = 0;
    var y = numCols - 1;
    var result = null;

    var prevItem = TicTacToeValidator.lookAtItem(board, numCols, y, x);
    ++x;
    --y;
    for (; x < numCols;) {
        result = TicTacToeValidator.lookAtItem(board, numCols, y, x);

        if (result !== prevItem) {
            result = null;
            break;
        }

        prevItem = result;

        ++x;
        --y;
    }

    return result;
};

module.exports = TicTacToeValidator;