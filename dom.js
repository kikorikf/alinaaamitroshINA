const paragraph = document.querySelector('p'); /*1 task*/
paragraph.innerHTML = paragraph.innerText
   .split(' ')
   .map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
   .join(' ');


   const link = document.createElement('a'); /*2 task*/
   link.href= 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
   link.innerText = 'Link to text';

   document.body.appendChild(link);


paragraph.innerHTML = paragraph.innerHTML /*3 task*/
  .split(/\.[^\.|]/)
  .join('.</p><p>')+ '</p>'


const wordCount = paragraph.innerText.split(' ').length; /*4 task*/
const wordCountElem = document.createElement('div');
wordCountElem.innerText = `${wordCount} words`;
document.body.insertBefore(wordCountElem, paragraph);


Array.from(document.querySelectorAll('p')).forEach(p=>{ /*5 task */
  p.innerHTML=p.innerHTML
  .replace(/\?/g,'🤔')
  .replace(/\!/g,'😲')
})
