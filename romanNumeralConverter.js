const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

// function to convert number to Roman numeral
const toRomanNumeral = (num) => {
    let roman = "";

    for (const key in romanNumerals) {
        while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
        }
    }

    return roman;
};

console.log(toRomanNumeral(69)); // Output: LXIX


// function to convert Roman numeral to number
const toNumber = (roman) => {
    let number = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];

        if (next && current < next) {
            number += next - current;
            i++;
        } else {
            number += current;
        }
    }

    return number;
};

console.log(toNumber("XXVIII")); // Output: 28
