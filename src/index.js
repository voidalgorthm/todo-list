import './styles/todo-list.css';
import initializePage from './modules/page'
import Task from './modules/task';
import Project from './modules/project';

document.body.classList.add('flex-column');
document.querySelector('main').classList.add('flex-column');

initializePage;

const taskit = new Task({title: 'tasketit', description: 'tasketit', dueDate: '06/06/2022', affiliation: 'Yamete'});
const taskya = new Task({title: 'taskya', description: 'taskya'});
const taskdelete = new Task({title: 'taskdelete', description: 'delete'});

const yamete = new Project('Yamete');
const kudasai = new Project('Kudasai');

yamete.addTask(taskit);
yamete.addTask(taskdelete);
kudasai.addTask(taskya);

console.log(yamete.getTasks());
console.log(kudasai.getTasks());

yamete.deleteTask('taskdelete');
console.log(yamete.getTasks());

const main = document.querySelector('#main');

const date = document.createElement('input');
setAttributes(date, {type: 'date'});

main.append(date);

date.addEventListener('change', (event) => {
  console.log(event.target.value);
})

function setAttributes(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }