// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    let num = numbers.filter(number => typeof number === "number")
    //console.log(num)
    let averageNum = num.reduce((preValue, curValue) => preValue + curValue) / num.length;

    return averageNum;
}

module.exports = average;
