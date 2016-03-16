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

export default class GameOverSplaceComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const thisComponent = this;

        let style = {
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: window.innerHeight,
            backgroundColor: 'rgba(0,0,0,0.2)',
            margin: 'auto',
            textAlign: 'center',
            transition: 'all 1s ease',
            fontSize: '15vw',
            fontFamily: 'sans-serif',
            color: 'green',
            lineHeight: '100vh',
            zIndex: 1,
            fontWeight: 'bold'
        };

        if (this.props.show === true) {
            style.top = 0;
        }

        let winnerText = this.props.winner;

        if (winnerText !== 'draw') {
            winnerText += ' WINS!';
        }

        return (
            createElement('span', {
                style: style
            }, [
                winnerText
            ])
        );
    };
}