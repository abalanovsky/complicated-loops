// Loop 1
let firstMessage = 'Loop 1: '
for (let i = 20; i <= 30; i += 0.5) {
    firstMessage += `${i} `
}
console.log(firstMessage)

// Loop 2
let secondMessage = 'Loop 2: '
const rate = 27
for (let i = 10; i <= 100; i += 10) {
    i === 100 ? secondMessage += `${i}$ = ${i * rate}₴` : secondMessage += `${i}$ = ${i * rate}₴, `
}
console.log(secondMessage)

// Loop 3
let thirdMessage = 'Loop 3: '
const numeric = 441
for (let i = 1; i <= 100; i++) {
    if (i * i <= numeric) {
        thirdMessage += `${i} `
    }
}
console.log(thirdMessage)

// Loop 4
const number = 8
if (number === 1) {
    console.log(`Loop 4: Number ${number} is NOT prime.`)
} else if (number === 2) {
    console.log(`Loop 4: Number ${number} is prime.`)
} else {
    let isPrime = true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false
            break
        }
    }

    isPrime ? console.log(`Loop 4: Number ${number} is prime.`) : console.log(`Loop 4: Number ${number} is NOT prime.`)
}

// Loop 5
const checkNum = 82
let canBeFound = false
for (let i = 1; i <= checkNum; i++) {
    if (3 ** i === checkNum) {
        canBeFound = true
        console.log('Can be found')
        break
    }
}
if (!canBeFound) {
    console.log('Cannot be found')
}
