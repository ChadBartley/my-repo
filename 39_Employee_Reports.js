function reports(map, id) {

    let recursive = (b) => {

        if(!map[b] || map[b].length === 0) {
            return 0;
        }

        let count = 0;
    
        for(let report of map[b]) {
            count += 1 + recursive(report);
        }

        return count;
    
    }

    return recursive(id);

}


let employee = {
    '123': ['456','789', '101'],
    '456': ['111', '213', '234'],
    '789': [],
    '101': [],
    '111': [],
    '213': [],
    '234': ['999'],
    '999': []
};


console.log(reports(employee, '123'));