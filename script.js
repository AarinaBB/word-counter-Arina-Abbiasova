const text = prompt ('Enter your text')
const countingSentence = /[.!?]/
const numOfSentences = text.split(countingSentence)
const count = (text.match(/\, /g)).length
function countWords(text) {
  text = text.trim();
  var words = text.split(" ");
  return words.length;
}
const wordCount = countWords(text);
alert (`В тексе всего слов ${wordCount}`)
alert (`В тексте всего букв ${+ text.match(/[^\s]/g).length}`)
alert (`Всего символов ${text.length}`)
alert (`В тексте всего предложений ${numOfSentences.length - 1}`)
