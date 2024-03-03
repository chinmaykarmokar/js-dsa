// 53. Counts number of Arrays in input
const arraysInInput = (array) => {
    let nestedArrayCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            nestedArrayCount += 1;
        }
    }

    return `The number of nested arrays in the given input is: ${nestedArrayCount}`;
}

console.log(arraysInInput(["Chinmay", 21, "Tanmoy", "Seema", {hobby: "Cycling"}, [21,30,52], ["FC Barcelona"]]));

// 51. Factor chaining
const factorChaining = (array) => {
    for (let i = 1; i < array.length; i++) {
        if (array[i] % array[i-1] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(factorChaining([1,2,4,8,16,32]));

// Calculate sum from mixed data
const sumFromMixedData = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) !== "number") continue;
        else {
            sum += array[i]
        }
    }

    return `The sum of all numbers from the mixed dataset is: ${sum}.`
}

console.log(sumFromMixedData([true, false, "Chinmay", "Tanmoy", "Seema", 21, 30, 52]));

// 47. Remove null values
const removeNullValues = (object) => {
    let onlyTrueValues = {};

    let objectKeys = Object.keys(object);

    for (let i = 0; i < objectKeys.length; i++) {
        if (!object[objectKeys[i]]) continue;
        else if (typeof(object[objectKeys[i]]) === "object") {
            onlyTrueValues[objectKeys[i]] = removeNullValues(object[objectKeys[i]]);
        } 
        else if (Array.isArray(object[objectKeys[i]])) {
            onlyTrueValues[objectKeys[i]] = object[objectKeys[i]].filter(val => val !== false && val !== null && val !== '');
        }
        else {
            onlyTrueValues[objectKeys[i]] = object[objectKeys[i]];
        }
    }
    return onlyTrueValues;
}

console.log(removeNullValues(
    {
        a: null,
        b: false,
        c: true,
        d: 0,
        e: 1,
        f: '',
        g: 'a',
        h: [null, false, '', true, 1, 'a'],
        i: { j: 0, k: false, l: 'a' }
    }
));

// 44. Create object from array with sepcified key
const objFromSpecificKey = (arr, id) => {
    return {
        [id]: arr.find(el => el.id === id)
    }
}

console.log(objFromSpecificKey(
    [
        {id: 1, name: "Chinmay"},
        {id: 2, name: "Tanmoy"},
        {id: 3, name: "Seema"}
    ], 1
));

// 45. Unique Values from a set of numbers 
const uniqueValues = (array) => {
    const uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);    
        }
        else {}
    }

    return uniqueArray;
}

console.log(uniqueValues([1,1,1,2,3,4,5,5,5,5,6,6,6,7,8,9,0]));

// 43. Ungroup Array Elements
const ungroupArray = (array) => {
    let combinedArray = array.flat();
    console.log(113, array);
    let arraysByType = {};

    for (let i = 0; i < combinedArray.length; i++) {
        if (arraysByType[typeof(combinedArray[i])] === undefined) {
            arraysByType[typeof(combinedArray[i])] = [combinedArray[i]];
        }
        else {
            arraysByType[typeof(combinedArray[i])].push(combinedArray[i]);
        }
    }

    return Object.values(arraysByType);
}

console.log(ungroupArray([['a', 1, true, undefined], ['b', 2, false, null], [["Chinmay", "Tanmoy", "Seema"], { hobby: "Cycling" }, "c", 21, 30, 52]]));

// 40 and 41 Array in range
const arrayInRange = (start, end) => {
    let rangeArray = [];

    for (let i = start; i <= end; i ++) {
        rangeArray.push(i);
    }

    return rangeArray;
}

console.log(arrayInRange(-6,3));

// 39. Filter array elements
const filterNulls = (array) => {
    return array.filter(el => el);
}

console.log(filterNulls([21, 30, 52, "Chinmay", undefined, null, "", true, false]));

// 36 and 37 Prefilled array
const prefilledArray = (length, value) => {
    let arr = Array(5);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = value
    }

    return arr;
}

console.log(prefilledArray(5,"Chinmay"));

