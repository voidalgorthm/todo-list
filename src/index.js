import './styles/todo-list.css';
import initializePage from './modules/page'
import Task from './modules/task';
import Project from './modules/project';
import TodoList from './/modules/list';

document.body.classList.add('flex-column');
document.querySelector('main').classList.add('flex-column');

initializePage;

const taskit = new Task({title: 'taskit', description: 'tasketit', dueDate: '06/06/2022', affiliation: 'Yamete'});
const taskya = new Task({title: 'taskya', description: 'taskya'});

const yamete = new Project('Yamete');
const kudasai = new Project('Kudasai');

yamete.addTask(taskit);
kudasai.addTask(taskya);

const list = new TodoList();
list.addProject(yamete);
list.addProject(kudasai);
console.log(list.containingProject('Yamete'));

const main = document.querySelector('#main');
const date = document.createElement('input');
setAttributes(date, {type: 'date'});
main.append(date);

date.addEventListener('change', (event) => {
  console.log(event.target.value);
})

function setAttributes(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }