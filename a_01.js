'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER flightDuration
 *  2. INTEGER_ARRAY movieDuration
 */

function foo(flightDuration, movieDuration) {
    // Write your code here

    // How long the target runtime of both movies is
    let totalRuntime = flightDuration - 30;

    // Track if we have seen the appropriate counter
    let counter = {};

    let possibleMatches = [];

    // Loop over each movie
    for(let i = 0; i < movieDuration.length; i++) {

        if(movieDuration[i] >= totalRuntime) {
            continue;
        }

        let pair = Math.abs(movieDuration[i] - totalRuntime);

        if(counter[pair] || counter[pair] >= 0) {
            possibleMatches.push([counter[pair], i]);
        } else {
            counter[movieDuration[i]] = i;
        }
    }

    return getLongestMovieMatch(possibleMatches, movieDuration);

}

function getLongestMovieMatch(matches, movieDuration) {
    if(matches && matches.length > 0) {
        return matches[0];
    } else {
        return [-1,-1];
    }
}

// console.log(foo(90, [1,10,25,35,60]));
console.log(foo(110, [20,70,90,30,60,110]));

// function main() {

//     console.log(foo(90, [1,10,25,35,60]));
//     // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     // const flightDuration = parseInt(readLine().trim(), 10);

//     // const movieDurationCount = parseInt(readLine().trim(), 10);

//     // let movieDuration = [];

//     // for (let i = 0; i < movieDurationCount; i++) {
//     //     const movieDurationItem = parseInt(readLine().trim(), 10);
//     //     movieDuration.push(movieDurationItem);
//     // }

//     // const result = foo(flightDuration, movieDuration);

//     // ws.write(result.join('\n') + '\n');

//     // ws.end();
// }