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

import React from 'react-lite';
import { createElement } from 'react-lite';

import BoardComponent from './BoardComponent.js';
import GameMenuComponent from './GameMenuComponent.js';
import GameOverSplashComponent from './GameOverSplashComponent.js';

import GameStore from './../stores/GameStore.js';

export default class LayoutComponent extends React.Component {
    constructor(props) {
        super(props);

        let thisComponent = this;

        this.state = GameStore.getState();

        GameStore.subscribe(function() {
            let gameState = GameStore.getState();

            thisComponent.setState({
                board: gameState.board,
                numBoardCols: gameState.numBoardCols,
                gameStarted: gameState.started,
                gameEnded: gameState.ended,
                winner: gameState.winner
            });
        });
    }

    render() {
        const thisComponent = this;

        return (
            createElement('div', {
                style: {
                    margin: 'auto'
                }
            }, [
                createElement(BoardComponent, {
                    board: thisComponent.state.board,
                    numCols: thisComponent.state.numBoardCols
                }),
                createElement(GameMenuComponent, {
                    numBoardCols: thisComponent.state.numBoardCols,
                    show: !thisComponent.state.gameStarted
                }),
                createElement(GameOverSplashComponent, {
                    show: thisComponent.state.gameEnded,
                    winner: thisComponent.state.winner
                })
            ])
        );
    };
}