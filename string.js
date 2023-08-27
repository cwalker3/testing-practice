export function capitalize(string) {
  let firstCharCapitalized = string.charAt(0).toUpperCase();
  let restOfWord = string.slice(1);

  return firstCharCapitalized + restOfWord;
}

export function reverseString(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string.charAt(i);
  }

  return reversedString;
}

export function encipher(string, shift) {
  let charArray = string.split('');
  let enchipheredCharArray = charArray.map((char) => {
    return _encipherChar(char, shift);
  });

  return enchipheredCharArray.join('');
}

function _encipherChar(char, shift) {
  if (/^[A-Za-z]$/.test(char)) {
    return _shiftChar(char, shift);
  } else {
    return char;
  }
}

function _shiftChar(char, shift) {
  let codePoint = char.codePointAt(0);
  let base = codePoint <= 90 ? 65 : 97;
  let shiftedCodePoint = ((codePoint + shift - base) % 26) + base;
  return String.fromCodePoint(shiftedCodePoint);
}
