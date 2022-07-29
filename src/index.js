import './styles/todo-list.css';
import initializePage from './modules/page'
import Task from './modules/task';

document.body.classList.add('flex-column');
document.querySelector('main').classList.add('flex-column');

initializePage;

const taskus = new Task('taskete', 'yamete', '', '03/03/2022', '', '');
const tasker = new Task('tasketer', 'yameter', '06/06/2022', 'Coding', 'Sample notes');
const taskit = new Task({title: 'tasketit', description: 'yametit', dueDate: '06/06/2022', affiliation: 'Coding'});
const taskya = new Task();

console.log(taskus);
console.log(typeof taskus);
console.log(tasker);
console.log(typeof tasker);
console.log(taskit);
console.log(typeof taskit);
console.log(taskya);
console.log(typeof taskya);
