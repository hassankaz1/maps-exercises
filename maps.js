new Set([1, 1, 2, 2, 3, 4]);
//answer -> this returns a set with keys: 1,2,3,4 size: 4

const q2 = [...new Set("referee")].join("")
//answer -> returns a string "ref"

let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
//answer -> map will have size 2 and look like this [[123],true],[[1,2,3],false]

//hasDuplicate() answer below
const hasDuplicate = arr => !(arr.length === [... new Set(arr)].length)

//vowelCount() answer below
const vowelCount = str => {
    const arr = str.split('');
    const vowels = "aeiou";
    let vCount = new Map();
    arr.forEach(letter => {
        if (vowels.includes(letter)) {
            if (vCount.get(letter)) {
                vCount.set(letter, vCount.get(letter) + 1);
            } else {
                vCount.set(letter, 1);
            }
        }
    });

    return vCount

}