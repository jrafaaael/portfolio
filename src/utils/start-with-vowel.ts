const BEGIN_WITH_VOWEL_REGEX = "^[aeiouAEIOU].*";

export function startWithVowel(str: string) {
  const regex = new RegExp(BEGIN_WITH_VOWEL_REGEX, "i");

  return regex.test(str);
}
