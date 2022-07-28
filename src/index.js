import './styles/todo-list.css';
import initializePage from './modules/page'
import {testThat,testThis } from './modules/test'

document.body.classList.add('flex-column');
document.querySelector('main').classList.add('flex-column');

initializePage;

console.log(testThat());
console.log(testThis());