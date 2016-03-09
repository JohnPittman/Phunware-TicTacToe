'use strict';

export default class Player {
    constructor(id, piece) {
        this.id = null;
        this.piece = null;

        init(id, piece);
    }

    init(id, piece) {
        this.id = id;
        this.piece = piece;
    }

    dispose() {}
}
