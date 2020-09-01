// Global Scope – Scope outside the outermost function attached to window.
// Local Scope – Inside the function being executed.

let globalLet = "This is a global variable";

function fun() {
    let localLet = "This is a local variable";

    console.log(globalLet);
    console.log(localLet);
}

fun();


/////////////////////
// IF STATEMENTS
/////////////////////

// Basic IF
if( 1 === (1*1)) {
    console.log('1 is 1');
}

// BASIC IF NO BRACKET EXECUTES NEXT LINE
if ( 1=== (1*1))
    console.log('No Bracket Used');


// IF WITH ELSE
if (2 === 3 ) {
    console.log('You shouldn\'t see this');
} else {
    console.log('2 is not 3');
}


// ELSE IF STATEMENT

if ('chad' === 'CHAD'){
    console.log('Not true, check the case of each word');
} else  if ('chad'.toUpperCase() === 'CHAD') {
    console.log('Else IF section is hit')
} else {
    console.log('We shouldn\'t reach this');
}


////////////////////
// SWITCH STATEMENT
////////////////////


switch ('test'.toUpperCase()) {
    case 'Test':
        console.log('Should not hit this');
        break;
    case 'TEST':
        console.log('We hit this');
        break;
    default:
        console.log('Default Case');
}



///////////////////
// LOOPS
///////////////////


// Basic for loop

console.log(`Basic for loop`);
for (let i = 0; i < 10; ++i) {
    // Print a message or something
    console.log(`i = ${i}`);
}

// While loop
console.log(`Basic while loop`);
let j = 10;
while (j > 0) {
    console.log(`j = ${j}`);
    --j;
}

// for loop over dictionary
let dictionary = {'key': 'value', 'second': 'value'};
for (let kvp in dictionary) {
    console.log(kvp);
}


let arr = [1,2,3,4];
let elem = arr.splice(0,1);
console.log(`elem: ${elem} -- arr: ${arr}`);