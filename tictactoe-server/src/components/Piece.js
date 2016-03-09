'use strict';

export default class Piece {
    constructor(id) {
        this.id = null;

        init(id);
    }

    init(id) {
        this.id = id;
    }

    dispose() {}
}
