console.log('JS Array Methods');
const atR = [1, 2, 3, 4, 5].at(1); console.log(`[1, 2, 3, 4, 5].at(1)  =>  ${atR}`);
const concatR = [1, 2, 3].concat([4,5]); console.log(`[1, 2, 3, 4, 5].concat([4,5])  => [${concatR}]`);
const copyWithinR = [1, 2, 3, 4, 5].copyWithin(2,3,4); console.log(`[1, 2, 3, 4, 5].copyWithin(2,3,4)  => [${copyWithinR}]`);
const everyR = [1, 2, 3].every(n => n>0); console.log(`[1, 2, 3].every(n => n>0)  => ${everyR}`);
const fillR = [1, 2, 3, 4, 5].fill(0,1,3); console.log(`[1, 2, 3, 4, 5].fill(0,1,3)  =>  [${fillR}]`);
const filterR = [1, 2, 3].filter(n => n>1); console.log(`[1, 2, 3].filter(n => n>1)  => [${filterR}]`);
const findR = [1, 2, 3].find(n => n>1); console.log(`[1, 2, 3].find(n => n>1)  => ${findR}`);
const findIndexR = [7, 8, 9].findIndex(n => n>7); console.log(`[7, 8, 9].findIndex(n => n>7)  => ${findIndexR}`);
const fromR = Array.from('AB C'); console.log(`Array.from('AB C')  =>  [${fromR}]`);
const includesR = [1, 2, 3].includes(4); console.log(`[1, 2, 3].includes(4)  =>  ${includesR}`);
const indexOfR = [1, 2, 3].indexOf(1); console.log(`[1, 2, 3].indexOf(1)  =>  ${indexOfR}`);
const joinR = ['a', 'b', 'c'].join(''); console.log(` ['a', 'b', 'c'].join('')  =>  '${joinR}'`);
const lastIndexOfR = [1, 2, 3, 1].lastIndexOf(1); console.log(`[1, 2, 3, 1].lastIndexOf(1)  =>  ${lastIndexOfR}`);
const lengthR = [1, 2, 3, 4, 5].length; console.log(`[1, 2, 3, 4, 5].length  =>  ${lengthR}`);
const popR = [1, 2, 3].pop(); console.error(`[1, 2, 3].pop()  => [${popR}]`);
const pushR = [1, 2, 3].push(4); console.error(`[1, 2, 3].push(4)  => [${pushR}]`);
const reverseR = [1, 2, 3].reverse(); console.log(`[1, 2, 3].reverse()  => [${reverseR}]`);
const shiftR = [1, 2, 3].shift(); console.error(`[1, 2, 3].shift()  => [${shiftR}]`);
const sliceR = [0, 1, 2, 3].slice(1,3); console.log(`[0, 1, 2, 3].slice(1,3)  => [${sliceR}]`);
const someR = [1, 2, 3].some(n => n>2); console.log(`[1, 2, 3].some(n => n>2)  => ${someR}`);
const sortR = [2, 1, 0, -1, 3].sort(); console.log(`[2, 1, 0, -1, 3].sort()  => [${sortR}]`);
const spliceR = [0, 1, 2, 4].splice(1,3); console.log(`[0, 1, 2, 4].splice(1,3)  => [${spliceR}]`);
const toStringR = ['0', 'a', 1, '4'].toString(); console.error(`['0', 'a', 1, '4'].toString()  => "${toStringR}"`);
const unshiftR = [1, 2, 3].unshift(4); console.error(`[1, 2, 3].unshift(4)  => [${unshiftR}]`);

const arrayMethods = {};
