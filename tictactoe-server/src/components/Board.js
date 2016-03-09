'use strict';

import Tile from './Tile.js';

export default class Board {
    constructor(size) {
        this._size = size;
        this.grid = null;

        init(size);
    }

    init(size) {
        let grid = this.grid = [size * size];

        // Fill with tiles
        let i = 0;
        for (; i < size;) {
            grid[i] = new Tile();
            ++i;
        }
    }

    dispose() {
        while (this.grid.pop() !== undefined) {}
    }

    insert(piece, index) {
        let tile = this.grid[index];
        let tillFilled = this.tile.fill(piece);

        return tileFilled;
    }

    /**
    @todo checkForWinner
    */
    checkForWinner() {
        let result = false;
        return result;
    }
}
