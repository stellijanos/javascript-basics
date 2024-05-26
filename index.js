
// 1 = 00000001
// 2 = 00000010
// 3 = 00000011
// R = 00000000

// Read, Write, Execute
// 00000100 - only read
// 00000110 - only read and write
// 00000111 - all 3 permissions

console.log( 1 | 2); // Bitwise OR
console.log( 1 & 2); // Bitwise AND

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);