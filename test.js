const getBiggest = (arr) => arr.reduce((acc, idx) => (acc > idx ? acc : idx));
const a = getBiggest([10, 3, 40, 33]);
//console.log(a);

const clean = (arr) => arr.reduce((acc, ele) => {
    if (ele) {
      acc.push(ele);
    }
    return acc;
  }, [1,2,3]);
const b = clean([0, undefined, null, 4, null, 5]);
//console.info(b);

const repeated = str => {
    const lowered = str.toLowerCase();
    const splitted = lowered.split(' ');
    const reduced = splitted.reduce((acc, ele) => {
        acc[ele]? acc[ele]++ : acc[ele] = 1
        return acc
    }, {} );
    return reduced;
}
const cc = repeated('Un dia nuevo, un oportunidad mas');

//console.log('Un dia nuevo, un oportunidad mas'.toLowerCase().split(' ').);

const d = [1000,3,4,2,13,9,200];
//console.info(d.sort());
const f = d[6]? 1:0
console.log(f)
