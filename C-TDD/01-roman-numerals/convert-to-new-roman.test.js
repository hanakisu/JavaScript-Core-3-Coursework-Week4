let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  // Act
  // Assert
  const n = 1;
  const result = convertToNewRoman(n);
  const  retOutput= "I";

  expect(result).toEqual(retOutput);


});
