export function capitalize(string) {
  let firstCharCapitalized = string.charAt(0).toUpperCase();
  let restOfWord = string.slice(1);

  return firstCharCapitalized + restOfWord;
}
