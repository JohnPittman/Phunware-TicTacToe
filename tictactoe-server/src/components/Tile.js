'use strict'

export default class Tile {
    constructor() {
        // Index.
        this._id = null;

        // X or O.
        this._content = null;

        // Open for play or not.
        this._filled = null;

        init();
    }

    init() {
        this._id = null;
        this.content = null;
        this.filled = false;
    }

    dispose() {}

    fill(piece) {
        if (filled === false) {
            this.content = piece;
            this.filled = true;
        }

        return filled;
    }

    /**
    @method filled
    @return {booelean}
    */
    get filled() {
        return this._filled;
    }

    /**
    @method filled
    @param {boolean} value
    */
    set filled(value) {
        this._filled = value;
    }

    /**
    @method content
    @return {Piece}
    */
    get content() {
        return this._content;
    }

    /**
    @method content
    @param {Piece} value
    */
    set content(value) {
        this._content = value;
    }
}
