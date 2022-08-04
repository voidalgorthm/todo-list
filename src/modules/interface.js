import initializePage from './page'
import Task from './task';
import Project from './project';
import TodoList from './list';
import Forms from './forms';
import Storage from './storage';

export default class Interface {

  static loadAll() {
    initializePage;
    Interface.loadAllTasks();
  }

  static loadAllTasks() {
    Interface.test();
    Interface.createTaskContainer();

  }

  static createTaskContainer() {
    const contentItems = document.querySelector('#content-items');
    const userTask = document.createElement('div');
    const checkBox = document.createElement('img');

 /*    
    tasksList.innerHTML += `
      <button class="button-task" data-task-button>
        <div class="left-task-panel">
          <i class="far fa-circle"></i>
          <p class="task-content">${name}</p>
          <input type="text" class="input-task-name" data-input-task-name>
        </div>
        <div class="right-task-panel">
          <p class="due-date" id="due-date">${dueDate}</p>
          <input type="date" class="input-due-date" data-input-due-date>
          <i class="fas fa-times"></i>
        </div>
      </button>`
 */
  }

  static test() {
    const one = new Task({ title: 'One', description: 'one', dueDate: '06/06/2022', projectConnected: 'Today' });
    const two = new Task({ title: 'Two', description: 'two', priority: '1'});
    const three  = new Task({title: 'Three', projectConnected: 'Week'});

    console.log(one);
    console.log(two);
    console.log(three);

    // Storage.addTask(one);
    // Storage.addTask(two);
    // Storage.addTask(three);
    Storage.addTask(new Task({title: 'Four', projectConnected: 'Upcoming'}));
    // Storage.deleteTask('Four');
    // Storage.clearStorage();

    // Storage.addProject(new Project('GIT'));
    Storage.deleteProject('ZeroOne');

    console.log(Storage.getList());


  }

}


function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }