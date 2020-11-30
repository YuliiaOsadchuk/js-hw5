const getArrayFromStr = (array) => {
    return array.split(',').map(parseFloat);
}
const getIntegerArray = (numbers) => {
    return numbers.filter(number => Number.isInteger(number) && number !== NaN);
}

const getRandomArray = (lengthArray, minNumber, maxNumber) => {
    let numbers = Array.from({ length: lengthArray }, (value, i) => i);
    let numberArray = [];
    numberArray = numbers.map((number, index) => {
        const randomNumber = minNumber + Math.random() * (maxNumber + 1 - minNumber);
        return Math.floor(randomNumber);
    })
    return numberArray;
}

const getAverage = (numbers) => {
    let numberArray = getArrayFromStr(numbers);
    numberArray = getIntegerArray(numberArray);
    const sum = numberArray.reduce((total, number) => {
        return total += number;
    }, 0)
    return (sum / numberArray.length);
}

const getMedian = (numbers) => {
    let numberArray = getArrayFromStr(numbers);
    numberArray = getIntegerArray(numberArray);
    numberArray = numberArray.sort(function(a, b) {
        return a - b;
    });
    return calcMedian(numberArray);
}

const calcMedian = (numbers) => {
    let median = 0;
    const position = Math.trunc(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        median = (numbers[position - 1] + numbers[position]) / 2;
    } else {
        median = numbers[position];
    }

    return median;
}

const filterEvenNumbers = (numbers) => {
    const numberArray = getArrayFromStr(numbers);
    return numberArray.filter(number => number % 2 !== 0);;
}

const countPositiveNumbers = (numbers) => {
    let numberArray = getArrayFromStr(numbers);
    return (numberArray.filter(number => number > 0)).length;
}

const getDividedByFive = (numbers) => {
    let numberArray = getArrayFromStr(numbers);
    return numberArray.filter(number => number % 5 === 0);
}