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

var grid = [1, 1, 1, 1, 1, 1, 1, 1, 1];
var width = 3;
var startPos = [0, 0];
var slope = [1, 0];

// Get the index of the row and column from a 1D array.
function calculateIndex(numCols, row, col) {
    return row * numCols + col;
}

// Could have each value to check relate to a number like empty=0, x=1, o=2.
// Reset position after.
function addBoxLine2D(grid, xPos, yPos, slopeX, slopeY, width) {
    let index = 0;
    let result = 0;

    while (
        xPos < width &&
        yPos < width
    ) {
        index = calculateIndex(width, yPos, xPos);

        result += grid[index];

        yPos += slopeY;
        xPos += slopeX;
    }

    return result;
}

let lineValue = addBoxLine2D(grid, 0, 2, 1, -1, width);
console.log(lineValue);
