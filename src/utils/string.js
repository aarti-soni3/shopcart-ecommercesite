export const TrimSentence = (sentence, characterCount = 22) => {
  if (sentence) {
    if (sentence.length < characterCount) return sentence;
    return sentence.slice(0, characterCount) + "...";
  }
};
