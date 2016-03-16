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

export default class TileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleMouseupEventRef = this.handleMouseupEvent.bind(this);
    }

    handleMouseupEvent(e) {
        e.preventDefault();
        e.stopPropagation();

        // Handle state action.
        GameStore.dispatch({
            type: 'Turn',
            state: {
                selectedIndex: this.props.selectedIndex,
            }
        });
    }

    componentDidMount() {
        this.refs.tile.addEventListener('mouseup', this.handleMouseupEventRef);
    }

    componentWillUnmount() {
        this.refs.tile.removeEventListener('mouseup', this.handleMouseupEventRef);
    }

    render() {
        let props = this.props;

        let style = {
            position: 'absolute',
            color: 'brown',
            backgroundColor: '#eeeeaa',
            minWidth: '40px',
            minHeight: '40px',
            width: props.width,
            height: props.height,
            left: props.xPos,
            top: props.yPos,
            border: 'none',
            borderRadius: '50%',
            fontSize: props.width * 0.9,
            fontFamily: 'sans-serif',
            textAlign: 'center',
            transition: 'all 1s ease',
            transform: ''
        };

        if (props.winner === true) {
            style.backgroundColor = 'green';
        }

        if (props.mark !== null) {
            style.transform = 'rotateY(180deg)';
        }

        return (
            createElement('div', {
                style: style,
                ref: 'tile'
            }, props.mark)
        );
    }
}