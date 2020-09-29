/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    
    for(let day = 0; day < N - 1 - 1; day++) {
        let prevState = cells.slice();
        for(let i = 0; i < cells.length; i++) {
            if(i === 0 || i === cells.length -1) {
                cells[i] = 0;
            } else {
                let shouldSwitch = prevState[i -1] === prevState[i + 1];
                if(shouldSwitch) {
                    cells[i] = 1;
                } else {
                    cells[i] = 0;
                }
            }
            
        }
        
        console.log(cells);
    }
    
    return cells;
    
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7));