/*

You are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

*/

export class Kata {
  static squareDigits(num: number): number {
    const digits = String(num)
      .split("")
      .map((value) => {
        return Math.pow(Number(value), 2);
      });

    return Number(digits.join(""));
  }
}

/*

const numbers = [1, 2, 3, 4, 5];

 Join with default separator (comma)
const defaultJoined = numbers.join(); // "1,2,3,4,5"
console.log(defaultJoined);

 Join with no separator (concatenates numbers into a single string)
const noSeparatorJoined = numbers.join(''); // "12345"
console.log(noSeparatorJoined);

 Join with a custom separator (e.g., a hyphen)
const customSeparatorJoined = numbers.join('-'); // "1-2-3-4-5"
console.log(customSeparatorJoined);

*/
