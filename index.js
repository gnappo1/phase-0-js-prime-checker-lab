// Prime Checker Lab

// Use the variables below in your solution
const num1 = 79;
let isNum1Prime;

const num2 = 123;
let isNum2Prime;

// Solution for isNum1Prime
let countNum1 = 2;
if (num1 < 2) {
    isNum1Prime = false;
} else if (num1 === 2) {
    isNum1Prime = true;
} else {
    while (countNum1 < num1) {
        if (num1 % countNum1 === 0) {
            isNum1Prime = false;
            break;
        }
        countNum1++;
    }

    if (countNum1 === undefined) {
        isNum2Prime = true;
    }
}

// Same process for isNum2Prime
let countNum2 = 2;
if (num2 < 2) {
    isNum2Prime = false;
} else if (num2 === 2) {
    isNum2Prime = true;
} else {
    while (countNum2 < num2) {
        if (num2 % countNum2 === 0) {
            isNum2Prime = false;
            break;
        }
        countNum2++;
    }
    if (countNum1 === undefined) {
        isNum2Prime = true;
    }
}
