const { count } = require("console");

function cutFilms(inputList) {
    // Write your code here

    let counter = 1;

    let scenes = [];

    let word = inputList.join('');

    let char = inputList[0];
    let lastIndex = word.lastIndexOf(char);

    let i = 0;

    while(i < inputList.length) {

        if(i === lastIndex) {
            scenes.push(counter);
            counter = 1;
            i += 1;
            char = inputList[i];
            lastIndex = word.lastIndexOf(char);
        } else if(!lastIndex) {
            scenes.push(1);
            i += 1;
        } else {
            let nextChar = inputList[i + 1];
            let nextIndex = word.lastIndexOf(nextChar);
            if(nextIndex > lastIndex) {
                lastIndex = nextIndex;
                char = nextChar;
            }
            i += 1;
            counter += 1;
        }
    }

    return scenes;

}

console.log(cutFilms(['a','b','c','d','a','e','f','g','h','i','j','e'])); // [5,7]
// console.log(cutFilms(['a','b','c']));