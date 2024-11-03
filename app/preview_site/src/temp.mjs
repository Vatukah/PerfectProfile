import HandleBars from 'handlebars';
const root = document.getElementById('resume-preview-container')
const template = HandleBars.compile('<h1>name:{{name}}</h1>');

const html=template({name:'Anupam'});
console.log(html)
root.innerHTML=html;