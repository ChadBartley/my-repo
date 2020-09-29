
/**
 * The length of each `word` and `part` is very small (<=30).
 * Whereas the length of `words` and `parts` array is very large (<=10^5).
 * Big-O notations below are considering only `words` O(w) and `parts` O(p).
 *
 * Time: O(w + p)
 * Memory: O(w + p)
 */
function findSubstrings(words, parts) {
    const trie = toTrie(parts); // O(p) | O(p)
    const matches = words.map(word => { // O(w)
      const match = findLongestInTrie(trie, word);
      // O(1) | O(w)
      if (match !== '') return word.replace(match, `[${match}]`);
      else return word;
    });
    return matches;
  }
  
  /**
   * Time: O(p)
   * Memory: O(p)
   */
  function toTrie(parts) {
    const trie = {};
    parts.forEach(part => {
      let node = trie;
      for (let i=0; i<part.length; i++) {
        const c = part[i];
        node[c] = node[c] || {};
        if (i === part.length-1) node[c].end = true;
        node = node[c];
      }
    });
    return trie;
  }
  
  /**
   * Time: O(1)
   * Memory: O(1)
   */
  function findLongestInTrie(trie, word) {
    let maxMatch = '';
    for (let w=0; w<word.length; w++) {
      const match = findLongestInTrieFromCharIndex(trie, word, w);
      if (match.length > maxMatch.length) maxMatch = match;
    }
    return maxMatch;
  }
  
  /**
   * Time: O(1)
   * Memory: O(1)
   */
  function findLongestInTrieFromCharIndex(trie, word, charIndex) {
    let maxLength = 0;
    let node = trie;
    for (let w=charIndex; w<word.length; w++) {
      let c = word[w];
      if (!node[c]) {
        break;
      } else {
        node = node[c];
        const matchLength = w-charIndex+1;
        if (node.end && matchLength > maxLength) {
          maxLength = matchLength;
        }
      }
    }
    return word.slice(charIndex, charIndex+maxLength);
  }


console.log(findSubstrings(["Apple","Melon","Orange","Watermelon"],["a","mel", "lon", "el", "An"]));
  