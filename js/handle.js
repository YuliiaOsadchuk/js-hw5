const handleRandomArray = () => {
    const lengthArrayInputNode = document.getElementById("length-array-input");
    const minArrayInputNode = document.getElementById("min-array-input");
    const maxArrayInputNode = document.getElementById("max-array-input");
    const randomArrayOutputNode = document.getElementById("random-array-output");
    randomArrayOutputNode.textContent = "Масив випадкових чисел: " + getRandomArray(+lengthArrayInputNode.value, +minArrayInputNode.value, +maxArrayInputNode.value);
}


const handleFilterEvenNumbers = () => {
    const arrayInputNode = document.getElementById("filter-even-array-input");
    const randomArrayOutputNode = document.getElementById("filter-even-array-output");
    randomArrayOutputNode.textContent = "Відсортований масив без парних чисел: " + filterEvenNumbers(arrayInputNode.value);
}

const handleCountPositiveNumbers = () => {
    const arrayInputNode = document.getElementById("count-positive-numbers-input");
    const numbersArrayOutputNode = document.getElementById("count-positive-numbers-output");
    numbersArrayOutputNode.textContent = "Кількість чисел більше нуля: " + countPositiveNumbers(arrayInputNode.value);
}

const handleGetAverage = () => {
    const averageInputNode = document.getElementById("get-average-input");
    const averageOutputNode = document.getElementById("get-average-output");
    averageOutputNode.textContent = "Середнє значення введених чисел: " + getAverage(averageInputNode.value);
}
const handleGetDividedByFive = () => {
    const arrayInputNode = document.getElementById("get-divided-by-five-input");
    const arrayOutputNode = document.getElementById("get-divided-by-five-output");
    arrayOutputNode.textContent = "Масив чисел кратних 5: " + getDividedByFive(arrayInputNode.value);
}

const handleGetMedian = () => {
    const arrayInputNode = document.getElementById("get-median-input");
    const medianOutputNode = document.getElementById("get-median-output");
    medianOutputNode.textContent = "Медіана: " + getMedian(arrayInputNode.value);
}