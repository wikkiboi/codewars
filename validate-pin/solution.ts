/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

*/

export class Kata {
  static validatePin(pin: string): boolean {
    const validDigits = [4, 6];

    if (!validDigits.includes(pin.length)) {
      return false;
    }

    for (const char of pin) {
      if (char < "0" || char > "9") {
        return false;
      }
    }

    return true;
  }
}

/*

Do not use .forEach()

pinValues.forEach((char) => {
  if (char < "0" || char > "9") {
    return false;  // Only exits the current callback function, NOT the outer function
  }
});

The return false here only exits the current callback function passed to forEach — it does NOT exit the outer validatePin function.

Another solution:
    if (pin.split("").some(char => char < "0" || char > "9")) {
      return false;
    }

*/
