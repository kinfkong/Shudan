const {h, render} = require('preact')
const Goban = require('..')

const signMap = [
    [0,0,0,-1,-1,-1,1,0,1,1,-1,-1,0,-1,0,-1,-1,1,0],
    [0,0,-1,0,-1,1,1,1,0,1,-1,0,-1,-1,-1,-1,1,1,0],
    [0,0,-1,-1,-1,1,1,0,0,1,1,-1,-1,1,-1,1,0,1,0],
    [0,0,0,0,-1,-1,1,0,1,-1,1,1,1,1,1,0,1,0,0],
    [0,0,0,0,-1,0,-1,1,0,0,1,1,0,0,0,1,1,1,0],
    [0,0,-1,0,0,-1,-1,1,0,-1,-1,1,-1,-1,0,1,0,0,1],
    [0,0,0,-1,-1,1,1,1,1,1,1,1,1,-1,-1,-1,1,1,1],
    [0,0,-1,1,1,0,1,-1,-1,1,0,1,-1,0,1,-1,-1,-1,1],
    [0,0,-1,-1,1,1,1,0,-1,1,-1,-1,0,-1,-1,1,1,1,1],
    [0,0,-1,1,1,-1,-1,-1,-1,1,1,1,-1,-1,-1,-1,1,-1,-1],
    [-1,-1,-1,-1,1,1,1,-1,0,-1,1,-1,-1,0,-1,1,1,-1,0],
    [-1,1,-1,0,-1,-1,-1,-1,-1,-1,1,-1,0,-1,-1,1,-1,0,-1],
    [1,1,1,1,-1,1,1,1,-1,1,0,1,-1,0,-1,1,-1,-1,0],
    [0,1,-1,1,1,-1,-1,1,-1,1,1,1,-1,1,-1,1,1,-1,1],
    [0,0,-1,1,0,0,1,1,-1,-1,0,1,-1,1,-1,1,-1,0,-1],
    [0,0,1,0,1,0,1,1,1,-1,-1,1,-1,-1,1,-1,-1,-1,0],
    [0,0,0,0,1,1,0,1,-1,0,-1,-1,1,1,1,1,-1,-1,-1],
    [0,0,1,1,-1,1,1,-1,0,-1,-1,1,1,1,1,0,1,-1,1],
    [0,0,0,1,-1,-1,-1,-1,-1,0,-1,-1,1,1,0,1,1,1,0]
]

render((
    h(Goban, {
        containerSize: 800,
        signMap,
        showCoordinates: true,
        lines: [
            {v1: [10, 6], v2: [3, 4]}
        ]
    })
), document.body)
