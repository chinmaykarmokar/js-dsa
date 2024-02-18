// 1. Check if string.
const checkIfString = (string) => {
    if (typeof(string) === "string") return true;
    else return false;
}

// 2. Check if string is empty.
const checkIfStringEmpty = (string) => {
    if (string.length === 0) return true;
    else return false;
}

// 3. Split to array
const splitWordsToArray = (string) => {
    return string.split(" ");
}

// 4. Extract specified characters
const extractFromString = (string, n) => {
    return string.substring(0,n);
}

// 5. Shorten name
const shortenName = (string) => {
    const name = string.split(" ");
    return `${name[0]} ${name[1][0]}.`
}

// 6. Hide email
const hideEmail = (email) => {
    const emailSeperator = email.indexOf("@");
    const emailSectionToHide = email.substring(5,emailSeperator);
    const hiddenEmail = email.replace(emailSectionToHide, "*".repeat(emailSectionToHide.length));

    return hiddenEmail;
}

// 7. Covert to parameterized string
const parameterizedString = (string) => {
    return string.trim().toLowerCase().replaceAll(" ", "-");
}

// 8. Capitalize first letter of string
const capitalizeFirstLetter = (string) => {
    return string.slice(0,1).toUpperCase() + string.slice(1);
}

// 9. Capitalize first letter of each word
const capitalizeFirstLetterEachWord = (string) => {
    const words = string.split(" ");
    let capitalizedString = "";

    for (let i = 0; i < words.length; i++) {
        capitalizedString += words[i].slice(0,1).toUpperCase() + words[i].slice(1) + " ";
    }

    return capitalizedString;
}

// 10. Swap case
const swapCase = (string) => {
    let swappedString = "";

    for (let i = 0; i < string.length; i++) {
        (string[i] === string[i].toLowerCase()) ?
            swappedString += string[i].toUpperCase() :
            swappedString += string[i].toLowerCase();
    }

    return swappedString;
}

// 11. Camelize string
const camelizeString = (string) => {
    const words = string.split(" ");

    let camelizedString = words[0].slice(0,1).toLowerCase() + words[0].slice(1);

    for (let i = 1; i < words.length; i++) {
        camelizedString += words[i].slice(0,1).toUpperCase() + words[i].slice(1);
    }

    return camelizedString;
}

// 12. Uncamelize string
// const unCamelizeString = (string) => {
//     let x = "";
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toUpperCase()) {
//             x = string.replace(string[i], ` ${string[i]}`)
//         } 
//     }
//     return x;
// }

// console.log(unCamelizeString("myFootballTeam"));

// 13. Repeat string n times
const repeatString = (string, n) => {
    return string.repeat(n);
}

// 14. Insert string inside string
const stringInsertion = (string, newString, insertPosition = 1) => {
    const stringPositions = string.split('');
    stringPositions.splice(insertPosition - 1, 0, newString);
    return stringPositions.join('');
}

// 15. Humanize format // Do this question again.
const humanizeStrFormat = (number) => {
    if (number.toString().endsWith("1") && !number.toString().endsWith("11")) return `${number}st`;
    else if (number.toString().endsWith("2") && !number.toString().endsWith("22")) return `${number}nd`;
    else if (number.toString().endsWith("3") && !number.toString().endsWith("33")) return `${number}rd`;
    else if (number.toString().endsWith("11") || number.toString().endsWith("22") || number.toString().endsWith("33")) return `${number}th`;
    else return `${number}th`;
}

// 16. Truncate string
const truncateString = (string, length, shortner = "...") => {
    if (string.length > length) {
        const truncatedString = string.slice(0, length) + shortner;
        return truncatedString;
    }
    else {
        return string;
    }
}

// 17. Chop string to chunks (Taken ref)
const chopStringToChunks = (string, length) => {
    let stringChunks = [];

    for (let i = 0; i < string.length; i += length) {
        stringChunks.push(string.slice(i, i + length));
    }

    return stringChunks;
}

// 18. Count substrings in a string
const substringsCount = (string, word) => {
    const substrings = string.toLowerCase().split(" ");
    let substringsCountMap = {};

    for (let substring of substrings) {
        if (substringsCountMap[substring] === undefined) {
            substringsCountMap[substring] = 1;
        }
        else {
            substringsCountMap[substring] += 1;
        }
    }

    return `The word '${word}' appears '${substringsCountMap[word.toLowerCase()]}' times in the given string.`
}

// 19. Escape HTML
const escapeHTML = (htmlStr) => {
    const htmlReplacement = {
        "<": "&lt;",
        '"': "&quot;",
        ">": "&gt;"
    }

    return htmlStr.replaceAll(/<|>|"/gi, (htmlChar) => {
        return htmlReplacement[htmlChar];
    })
}

// 20. Pad strings
const padStrings = (number, paddingParameter, paddingType) => {
    if (paddingType === "l") return paddingParameter.toString().padStart(number.length, number);
    else return paddingParameter.toString().padEnd(number.length, number);
}

// 21. Same as 13.

// 22. Part of string after specific character and position
const partOfStringPerPosition = (string, seperator, position) => {
    if (position === "before") {
        return string.slice(0,string.indexOf(seperator));
    }
    else return string.slice(string.indexOf(seperator) + 1, string.length);
}

// 23. Trim string
const trimString = (string) => {
    return string.trim();
}

// 24. TruncateStringToFixedWords
const truncateStrToFixedWords = (string, length) => {
    const words = string.split(" ");
    
    return words.slice(0, length).join(" ");
}

// 25. Alphabetize a string
const alphabetizeString = (string) => {
    return string.split("").sort().join("");
}

// 26. Remove duplicate words from string
const removeDuplicateFromString = (string) => {
    const words = string.toLowerCase().split(" ");
    let uniqueWords = "";

    for (let word of words) {
        if (uniqueWords.includes(word)) continue;
        else uniqueWords += word + " ";
    }

    return uniqueWords;
}

// 27. ASCII to hexadecimal
const asciiToHex = (string) => {
    let asciiToHexStr = "";

    for (let i = 0; i < string.length; i++) {
        asciiToHexStr += string.charCodeAt(i).toString(16);
    }

    return asciiToHexStr;
}

// 28. Convert hex to ASCII
const hexToAscii = (string) => {
    let hexToAsciiStr = "";

    for (let i = 0; i < string.length; i += 2) {
        hexToAsciiStr += String.fromCharCode(parseInt(string.substr(i,2), 16));
    }

    return hexToAsciiStr;
}

// 29. Same as 18.
// 31. Same as 19.

// 30. Check if string ends with a specifc param
const checkStrEndsWith = (string, param) => {
    if (string.toLowerCase().endsWith(param)) return true;
    else return false;
}

// 32. 