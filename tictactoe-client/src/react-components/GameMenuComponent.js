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

import GameStore from './../stores/GameStore.js';

export default class GameMenuComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const thisComponent = this;

        let gameState = GameStore.getState();

        let style = {
            position: 'absolute',
            width: '100%',
            height: '180px',
            top: '-180px',
            backgroundColor: 'white',
            margin: 'auto',
            textAlign: 'center',
            transition: 'all 1s ease',
            zIndex: 99
        };

        if (this.props.show === true) {
            style.top = '0px';
        }

        return (
            createElement('form', {
                style: style,
                onSubmit: function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    GameStore.dispatch({
                        type: 'NewGame',
                        state: {
                            numBoardCols: thisComponent.refs.boardColsInput.value
                        }
                    });
                }
            }, [
                createElement('input', {
                    style: {
                        display: 'block',
                        margin: 'auto',
                        fontWeight: 'Bold',
                        width: '100%',
                        height: '50%',
                        fontSize: '40px',
                        fontFamily: 'sans-seriff',
                        color: 'brown',
                        backgroundColor: '#eeeeaa',
                        border: 'none',
                        marginBottom: '20px'
                    },
                    type: 'submit',
                    value: 'PLAY GAME',
                    min: 0
                }),
                createElement('span', {
                    style: {
                        fontSize: '30px',
                        color: 'brown',
                        margin: '5px',
                        fontFamily: 'sans-seriff',
                        fontWeight: 'bold'
                    }
                }, '# Columns'),
                createElement('input', {
                    style: {
                        display: 'inline-block',
                        margin: 'auto',
                        width: '60px',
                        height: '50px',
                        border: 'none',
                        color: 'brown',
                        backgroundColor: '',
                        backgroundColor: '#eeeeaa',
                        fontSize: '40px'
                    },
                    type: 'number',
                    value: gameState.numBoardCols || 1,
                    ref: 'boardColsInput',
                    required: true,
                    autoFocus: true,
                    min: 1,
                    max: 20
                })
            ])
        )
    };
}