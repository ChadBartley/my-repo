/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    
    let count = {};
    
    for(let word of paragraph.replace(/[\W_]+/g, ' ').split(' ')) {
        if(count[word.toUpperCase()]) {
            count[word.toUpperCase()] += 1;
        } else {
            count[word.toUpperCase()] = 1;
        }
    }
    
    console.log(JSON.stringify(count))
    
    for(let word of banned) {
        if(count[word.toUpperCase()]) {
            count[word.toUpperCase()] = 0;
        }
    }
    
    
    
    let max = 0;
    
    let word = 'wtf';
    
    for(let key of Object.keys(count)) {
        if(count[key] && count[key] > max) {
            console.log(`wtf: ${key}`)
            max = count[key];
            word = key;
        }
    }
    
    return word.toLowerCase();
    
};