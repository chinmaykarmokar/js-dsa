// 12. Sum of all numbers divisble by 3 or 5
const sumOfNumbers = (number) => {
    let sum = 0;

    if (number > 999) return "Number provided is greater than 999.";

    else {
        for (let i = 1; i <= number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
    }

    return sum;
}

console.log(sumOfNumbers(999));

// 11. Find GCD for two numbers
const findGCD = (number1, number2) => {
    let divisorsOfNumbers = [];

    for (let i = 1; i <= (number1 > number2 ? number1 : number2); i++) {
        if (number1 % i === 0 && number2 % i === 0) {
            divisorsOfNumbers.push(i);
        }
    }

    return `The GCD of the numbers ${number1} and ${number2} is ${divisorsOfNumbers[divisorsOfNumbers.length - 1]}`;
}

console.log(findGCD(360, 336));

// 9. Find Armstrong Numbers
const armstrongNumbers = (number) => {
    let sum = 0;
    let individualDigits = number.toString().split("");

    for (let i = 0; i < individualDigits.length; i++) {
        sum += Math.pow(parseInt(individualDigits[i]), 3);
    }

    if (sum === number) return `The given number (${number}) is an Armstrong number.`;
    else return `The given number (${number}) is not an Armstrong number.`;
}

console.log(armstrongNumbers(371));

// 8. Happy Numbers
const isHappyNumber = (number) => {
    let sum = 0;

    while (number > 0) {
        let firstPartOfNumber = number % 10;
        number = Math.floor(number/10);

        sum += firstPartOfNumber * firstPartOfNumber;
    }
    if (sum === 1) {
        return true;
    }
    else if (sum > 1 && sum <= 4) {
        return false;
    }
    return isHappyNumber(sum);
}

console.log(isHappyNumber(7));


// 7. Students grades
const studentsMarks = {
    David:	80,
    Vinoth:	77,
    Divya:	88,
    Ishita: 95,
    Thomas: 68
}

const studentsGrades = (studentName) => {
    let totalMarks = 0;
    let avgMarks;

    for (let marks in studentsMarks) {
        totalMarks += studentsMarks[marks];
        avgMarks = totalMarks/Object.keys(studentsMarks).length;
    }

    if (studentsMarks[studentName] > 90 && studentsMarks[studentName] <= 100) {
        return `Student ${studentName} has secured A grade.`;
    }
    else if (studentsMarks[studentName] > 80 && studentsMarks[studentName] <= 90) {
        return `Student ${studentName} has secured B grade.`;
    }
    else if (studentsMarks[studentName] > 70 && studentsMarks[studentName] <= 80) {
        return `Student ${studentName} has secured C grade.`;
    }
    else if (studentsMarks[studentName] > 60 && studentsMarks[studentName] <= 70) {
        return `Student ${studentName} has secured D grade.`;
    }
    else {
        return `Student ${studentName} has secured F grade.`;
    }
}

console.log(studentsGrades("Ishita"));