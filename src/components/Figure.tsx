import React from 'react';

type Props = {
    wrongLetters: number
}

const svgElementsStyle: any = {
    stroke: '#707070', strokeWidth: 1, strokeLinecap: 'round', fill: 'none'
}

function Figure(props: Props) {
    return (
        <svg height="250" width="200">
            <line style={svgElementsStyle} x1="60" y1="20" x2="140" y2="20"/>
            <line style={svgElementsStyle} x1="140" y1="20" x2="140" y2="50"/>
            <line style={svgElementsStyle} x1="60" y1="20" x2="60" y2="230"/>
            <line style={svgElementsStyle} x1="20" y1="230" x2="100" y2="230"/>
            {props.wrongLetters > 0 && (
                <circle style={svgElementsStyle} cx="140" cy="70" r="20"/>
            )}
            {props.wrongLetters > 1 && (
                <line style={svgElementsStyle} x1="140" y1="90" x2="140" y2="150"/>
            )}
            {props.wrongLetters > 2 && (
                <line style={svgElementsStyle} x1="140" y1="120" x2="120" y2="100"/>
            )}
            {props.wrongLetters > 2 && (
                <line style={svgElementsStyle} x1="140" y1="120" x2="160" y2="100"/>
            )}
            {props.wrongLetters > 3 && (
                <line style={svgElementsStyle} x1="140" y1="150" x2="120" y2="180"/>
            )}
            {props.wrongLetters > 4 && (
                <line style={svgElementsStyle} x1="140" y1="150" x2="160" y2="180"/>
            )}
        </svg>

    );
}

export default Figure;
