let removeVowelsFromWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  // Act
  // Assert
  const words = ["irina", "etza", "daniel"];
  const result = removeVowelsFromWords(words);
  const outPut = ["rn", "tz", "dnl"];


  expect(result).toEqual(outPut);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
