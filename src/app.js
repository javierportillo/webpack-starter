// IMPORT SASS TO THIS FILE

import './app.sass';

// TESTING SOME ES6 FEATURES WITH BABEL

let a = 1000;

if (true === true) {
    let a = 1;
    console.log(a); // 1
}

console.log(a); // 1000

function rest(a, b, ...c) {
    console.log(c) // [3, 4, 5]

    return a + b;
}

rest(1, 2, 3, 4, 5);

const doNotMutateMePlease = {
    name: 'Jane',
    age: 20
}

const imTrying = {
    ...doNotMutateMePlease,
    age: 35
}

console.log(doNotMutateMePlease.age); // 20
console.log(imTrying.age); // 35

const cantChangeme = 0;

console.log(`This is a constant: ${cantChangeme}`);

// cantChangeme = 2; // SyntaxError "cantChangeme" is read-only


const btnSendToSandbox = document.getElementById('btnSendToSandbox');
const txtEditor = document.getElementById('txtEditor');
const sandbox = document.getElementById('sandbox');

btnSendToSandbox.addEventListener('click', function () {
    sandbox.srcdoc = txtEditor.value;
});
