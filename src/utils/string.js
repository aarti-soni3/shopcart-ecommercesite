export const trimSentence = (sentence, characterCount = 22) => {
  if (sentence?.length < characterCount) return sentence;
  return sentence?.slice(0, characterCount) + "...";
};

export const replaceHypensToWhiteSpace = (text) => {
  const replacedText = text?.replace("-", " ");
  return replacedText?.charAt(0).toUpperCase() + replacedText.slice(1);
};
