// Loop 1
let firstMessage = ''
for (let i = 10; i <= 20; i++) {
    if (i === 20) {
        firstMessage += i
    } else {
        firstMessage += `${i}, `
    }
}
console.log(`Loop 1: ${firstMessage}`)

// Loop 2
let secondMessage = ''
for (let i = 10; i <= 20; i++) {
    if (i === 20) {
        secondMessage += i * i
    } else {
        secondMessage += `${i * i}, `
    }

}
console.log(`Loop 2: ${secondMessage}`)

// Loop 3
for (let i = 1; i <= 10; i++) {
    console.log(`Loop 3: ${i} * 7 = ${i * 7}`)
}

// Loop 4
let thirdMessage = 0
for (let i = 1; i <= 15; i++) {
    thirdMessage += i
}
console.log(`Loop 4: ${thirdMessage}`)

// Loop 5
let product = 1
for (let i = 15; i <= 35; i++) {
    product *= i
}
console.log(`Loop 5: ${product}`)

// Loop 6
let fourthMessage = 0
const maxNum = 500

for (let i = 1; i <= maxNum; i++) {
    fourthMessage += i
}
console.log(`Loop 6: ${fourthMessage / maxNum}`)

// Loop 7
let fifthMessage = 0
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        fifthMessage += i
    }
}
console.log(`Loop 7: ${fifthMessage}`)

// Loop 8
let sixthMessage = ''
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        sixthMessage += `${i} `
    }
}
console.log(`Loop 8: ${sixthMessage}`)

// Loop 9
const naturalNum = 10
const dividers = []
for (let i = 1; i <= naturalNum; i++) {
    if (naturalNum % i === 0) {
        dividers.push(i)
    }
}
console.log(`Loop 9: ${dividers}`)

// Loop 10
const evenNumbers = []
for (let i = 0; i < dividers.length; i++) {
    if (dividers[i] % 2 === 0) {
        evenNumbers.push(dividers[i])
    }
}
console.log(`Loop 10: ${evenNumbers.length}`)

// Loop 11
let evenSum = 0
for (let i = 0; i < evenNumbers.length; i++) {
    evenSum += evenNumbers[i]
}
console.log(`Loop 11: ${evenSum}`)

// Loop 12
console.log('Loop 12:')
for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
        console.log(`${x} * ${y} = ${x * y}`)
    }
}
