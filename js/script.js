let femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
let maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
let allNames = femaleNames.concat(maleNames);
let newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}
console.log(allNames);