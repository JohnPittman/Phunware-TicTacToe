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

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var TicTacToeValidator = require('./tictactoe-validator.js');

app.use(express.static(path.join(__dirname, '..', '..', 'tictactoe-client', 'dist')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.post('/checkForWinner', function (req, res) {
    var winner = null;
    var board = req.body.board;
    var numCols = req.body.numCols;

    if (Array.isArray(board) === true && numCols > 0) {
        winner = TicTacToeValidator.checkBoard(board, numCols);

        if (winner === null) {
            if (TicTacToeValidator.isBoardFull(board) === true) {
                winner = 'draw';
            }
        }
    }

    res.json({
        winner: winner
    });
});

app.listen(3000, function () {
    console.log('listening on *:3000');
});