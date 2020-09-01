/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    // for(let i = 0; i < t.length; i++) {
    //     s = s.replace(new RegExp(s[i], 'g'), t[i]);
    // }
    
    // return s === t;

    if (s.length != t.length)
        return false;
    let m = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i]))
            m.set(s[i], t[i]);
        else {
            
            if (m.get(s[i]) != t[i]) {
                
                return false;
            }
        }
    }
    return new Set([...m.values()]).size == m.size;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('ab', 'aa')); // false