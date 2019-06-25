const abc = 'ABC'
const bac = 'abc'
const stringCompared = abc === bac

console.log(abc)
console.log(bac)
console.log(stringCompared)

if (abc > bac) {
    console.log('WOW ITS AMAZING')
} else if (abc < bac) {
    console.log('Wah B aja')
} else {
    console.log('ca mest égal')
}


const numA = 20 * 6

const numB = 70 + 50

switch (numA == numB) {
    case true:
        console.log('Congrats')
        break

    case false:
        console.log('try again')
        break

    default:
        console.log('imposible')
}