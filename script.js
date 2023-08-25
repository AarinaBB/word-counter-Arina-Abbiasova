const inputText = document.getElementById('input-text');
const letterCount = document.getElementById('letter-count');
const wordCount = document.getElementById('word-count');
const sentenceCount = document.getElementById('sentence-count');
const randomBackgroundButton = document.getElementById('random-background-button');
function countMetrics() {
const text = inputText.value;
const letters = text.replace(/[^A-Za-z]/g, '');
  letterCount.textContent = letters.length;
  const words = text.trim().split(/\s+/);
  wordCount.textContent = words.length;
  const sentences = text.split(/[.!?]+/);
  sentenceCount.textContent = sentences.length - 1;
}
inputText.addEventListener('input', countMetrics);
function generateRandomBackground() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
randomBackgroundButton.addEventListener('click', generateRandomBackground);



