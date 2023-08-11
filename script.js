
/* For this project, your task is to build a basic one-page application that counts the number of letters !, words! and sentences@ in a user-inputted block of text, as well as any other metrics you find interesting. At the very minimum, there will be one text input field and somewhere for the count information to appear. 

Bonus: Add a button to your application that when clicked, generates a random background of your choosing 🎨
*/

/*let text = 'Add a button to your application that when clicked, generates a random background of your choosing.Compare changes across branches, commits, tags, and more below. If you need to, you can!!'
console.log(text.length)
console.log(typeof(text)) // можно из предложения написать какого вида является тот или иной символ 
// сколько предложений в тексте 
const countingSentence = /[.!?]/
const numOfSentences = text.split(countingSentence)
console.log(numOfSentences.length-1);
if(countingSentence != /[!!]/ ){
  console.log()
}

const text = prompt('enter the text')
const countingSentence = /[.!?]/
const numOfSentences = text.split(countingSentence)
letters = text.replace(/[ ]/, '');
/*  let words = str.split(" ");
  let collect = {};
for (let i = 0; i < words.length; i++) {
  if (!collect[words[i]])
  collect[words[i]] = 0;
  collect[words[i]]++;
}

alert (`The count of letters ${text.replace} and symbols are ${text.length}`)
alert (`The cont of sentences is ${numOfSentences.length - 1}`)





/*function result () {
  return (text.length)
  return(numOfSentences.length-1)
  return(typeof(text))
}
result()

/*
const result = prompt (function () {
  console.log(text.length)
  const countingSentence = /[.!?]/
const numOfSentences = text.split(countingSentence)
console.log(numOfSentences.length-1);
})
*/


const text = prompt ('Enter your text')
const countingSentence = /[.!?]/
const numOfSentences = text.split(countingSentence)


alert (`В тексе всего слов ${}`)
alert (`В тексте всего букв ${}`)
alert (`Всего символов ${text.length}`)
alert (`В тексте всего предложений ${numOfSentences.length - 1}`)
alert ('Символов без пробелов: ' + text.match(/[^\s]/g).length);
