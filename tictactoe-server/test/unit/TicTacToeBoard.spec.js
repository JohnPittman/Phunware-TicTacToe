'use strict';

const path = require('path');
const Board = require('./../../dist/_prototypes/TicTacToeBoard.js').default;

describe('Board', function() {
    let board = new Board(3, 3);

    beforeEach(function() {
        board = new Board(3, 3);
    });

    describe('dispose', function() {
        it('Clears grid.', function() {
            board.dispose();
            expect(board.grid.length).toBe(0);
        });
    });

    describe('insertItem', function() {
        it('Put and item at the approciate index in the grid based on rows and columns.', function() {
            board.insertItem('item', 1, 2);
            expect(board.grid[1]).toBe('item');
        });
    });

    describe('lookAtItem', function() {
        it('Retrives item from a row and column.', function() {
            board.insertItem('item', 2, 2);
            let item = board.lookAtItem(2, 2);
            expect(item).toBe('item');
        });
    });

    describe('full', function() {
        it('Returns false if an index is undefined.', function() {
            board = new Board(1, 8);
            expect(board.full).toBe(false);
        });
        it('Returns true if every index is not undefined.', function() {
            board = new Board(1, 1);
            board.insertItem('item', 1, 1);
            expect(board.full).toBe(true);
        });
    });

    describe('_checkRow', function() {
        it('Returns the item if all items in the line match.', function() {
            board.insertItem('item', 1, 1);
            board.insertItem('item', 1, 2);
            board.insertItem('item', 1, 3);
            expect(board._checkRow(1)).toBe('item');
        });
        it('Returns false if values in row do not match.', function() {
            board.insertItem('item', 1, 1);
            board.insertItem('item', 1, 3);
            expect(board._checkRow(1)).toBe(false);
            expect(board._checkRow(2)).toBe(false);
        });
    });

    describe('_checkColumn', function() {
        it('Returns the item if all items in the line match.', function() {
            board.insertItem('item', 1, 1);
            board.insertItem('item', 2, 1);
            board.insertItem('item', 3, 1);
            expect(board._checkColumn(1)).toBe('item');
        });
        it('Returns false if values in row do not match.', function() {
            board.insertItem('item', 1, 1);
            board.insertItem('item', 2, 1);
            expect(board._checkColumn(1)).toBe(false);
        });
    });

    describe('_checkCross', function() {
        it('Returns the item if all items in the line match.', function() {
            board.insertItem('item', 1, 1);
            board.insertItem('item', 2, 2);
            board.insertItem('item', 3, 3);
            expect(board._checkCross()).toBe('item');
        });
        it('Returns false if values in row do not match.', function() {
            board.insertItem('item', 1, 1);
            board.insertItem('item', 2, 1);
            expect(board._checkCross()).toBe(false);
        });
    });

    describe('_checkCriss', function() {
        it('Returns the item if all items in the line match.', function() {
            board.insertItem('item', 1, 3);
            board.insertItem('item', 2, 2);
            board.insertItem('item', 3, 1);
            expect(board._checkCriss()).toBe('item');
        });
        it('Returns false if values in row do not match.', function() {
            board.insertItem('item', 1, 1);
            expect(board._checkCriss()).toBe(false);
        });
    });

    describe('checkBoard', function() {
        it('Criss', function() {
            board = new Board(4, 4);
            board.insertItem('item', 1, 4);
            board.insertItem('item', 2, 3);
            board.insertItem('item', 3, 2);
            board.insertItem('item', 4, 1);
            expect(board.checkBoard()).toBe('item');
        });
        it('Cross', function() {
            board = new Board(4, 4);
            board.insertItem('item', 4, 1);
            board.insertItem('item', 3, 2);
            board.insertItem('item', 2, 3);
            board.insertItem('item', 1, 4);
            expect(board.checkBoard()).toBe('item');
        });
        it('Row', function() {
            board = new Board(4, 4);
            board.insertItem('item', 1, 4);
            board.insertItem('item', 1, 3);
            board.insertItem('item', 1, 2);
            board.insertItem('item', 1, 1);
            expect(board.checkBoard()).toBe('item');
        });
        it('Column', function() {
            board = new Board(4, 4);
            board.insertItem('item', 1, 2);
            board.insertItem('item', 2, 2);
            board.insertItem('item', 3, 2);
            board.insertItem('item', 4, 2);
            expect(board.checkBoard()).toBe('item');
        });
        it('Returns false if values in row do not match.', function() {
            board.insertItem('item', 1, 1);
            expect(board.checkBoard()).toBe(false);
        });
    });
});
