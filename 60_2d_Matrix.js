/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    console.log(matrix);
    
    let dp = new Array(matrix.length).fill(new Array(matrix[0].length).fill(false));
    
    console.log(`wtf: ${dp[0][1]}`);

    dp[0][0] = true;
    
    let recursive = (i,j, val) => {
        
        
        if( i >= matrix.length || i < 0 || j >= matrix[i].length || j < 0) {
            return true;
        }
        
        console.log(`i: ${i} --- j: ${j} --- val: ${val} -- r: ${matrix[i][j]} --- dp: ${dp[i][j]}`);
        
        if(dp[i][j]) {
            return false;
        } else {
            console.log(`wtf: ${dp[0][1]} ${i}-${j}`);
            dp[i][j] = 't';
            console.log(`wtf: ${dp[0][1]}`);
            return matrix[i][j] === val && recursive( i + 1, j + 1,  val);
        }
        
    }
    
    for(let a = 0; a < matrix.length; ++a) {
        for(let b = 0; b < matrix[a].length; ++b) {
            console.log(`i: ${a} -- b: ${b} -- ${dp[a][b]}`);
            if(dp[a][b] === false) {
                if(!recursive(a,b, matrix[a][b])) {
                    return false;
                } else {
                    dp[a][b] = true;
                    console.log(`wtf: ${dp[0][1]}`);
                }
            }
        }
    }
    
    return true;
    
};

console.log(isToeplitzMatrix([[22,0,94,45,46,96],[10,22,80,94,45,46]]));