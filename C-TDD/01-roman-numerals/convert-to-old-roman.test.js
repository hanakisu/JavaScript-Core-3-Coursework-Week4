let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  
  let n = 1;
  let result = convertToOldRoman(n);
  let expected = "I";
  expect(result).toEqual(expected)
});
