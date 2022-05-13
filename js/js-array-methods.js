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

const arrayMethods = [
  { id: '1', metodR: atR, text: `[1, 2, 3, 4, 5].at(1)  =>  ${atR}`},
  { id: '2', metodR: concatR, text: `[1, 2, 3, 4, 5].concat([4,5])  => [${concatR}]`},
  { id: '3', metodR: copyWithinR, text: `[1, 2, 3, 4, 5].copyWithin(2,3,4)  => [${copyWithinR}]`},
  { id: '4', metodR: everyR, text: `[1, 2, 3].every(n => n>0)  => ${everyR}`},
  { id: '5', metodR: fillR, text: `[1, 2, 3, 4, 5].fill(0,1,3)  =>  [${fillR}]`},
  { id: '6', metodR: filterR, text: `[1, 2, 3].filter(n => n>1)  => [${filterR}]`},
  { id: '7', metodR: findIndexR, text: `[7, 8, 9].findIndex(n => n>7)  => ${findIndexR}`},
  { id: '8', metodR: findR, text: `[1, 2, 3].find(n => n>1)  => ${findR}`},
  { id: '9', metodR: fromR, text: `Array.from('AB C')  =>  [${fromR}]`},
  { id: '10', metodR: includesR, text: `[1, 2, 3].includes(4)  =>  ${includesR}`},
  { id: '11', metodR: indexOfR, text: `[1, 2, 3].indexOf(1)  =>  ${indexOfR}`},
  { id: '12', metodR: joinR, text: ` ['a', 'b', 'c'].join('')  =>  '${joinR}'`},
  { id: '13', metodR: lastIndexOfR, text: `[1, 2, 3, 1].lastIndexOf(1)  =>  ${lastIndexOfR}`},
  { id: '14', metodR: lengthR, text: `[1, 2, 3, 4, 5].length  =>  ${lengthR}`},
  { id: '15', metodR: popR, text: `[1, 2, 3].pop()  => [${popR}]`},
  { id: '16', metodR: pushR, text: `[1, 2, 3].push(4)  => [${pushR}]`},
  { id: '17', metodR: reverseR, text: `[1, 2, 3].reverse()  => [${reverseR}]`},
  { id: '18', metodR: shiftR, text: `[1, 2, 3].shift()  => [${shiftR}]`},
  { id: '19', metodR: sliceR, text: `[0, 1, 2, 3].slice(1,3)  => [${sliceR}]`},
  { id: '20', metodR: someR, text: `[1, 2, 3].some(n => n>2)  => ${someR}`},
  { id: '21', metodR: sortR, text: `[2, 1, 0, -1, 3].sort()  => [${sortR}]`},
  { id: '22', metodR: spliceR, text: `[0, 1, 2, 4].splice(1,3)  => [${spliceR}]`},
  { id: '23', metodR: toStringR, text: `['0', 'a', 1, '4'].toString()  => "${toStringR}"`},
  { id: '24', metodR: unshiftR, text: `[1, 2, 3].unshift(4)  => [${unshiftR}]`},
];

const methodEl = document.querySelector('.method');

const itemTemplate = ({ id, text }) => `
<li data-id="${id}" list-style="none">
    <h3>${text}</h3>
</li>`;

const renderList = () => {
  const list = arrayMethods.map(itemTemplate).join('');
  methodEl.innerHTML = '';
  methodEl.insertAdjacentHTML('beforeend', list);
}

renderList();
