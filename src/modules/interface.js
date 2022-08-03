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

    const one = new Task({ title: 'One', description: 'one', dueDate: '06/06/2022', projectConnected: 'Today' });
    const two = new Task({ title: 'Two', description: 'two', priority: '1'});
    const three  = new Task({title: 'Three', projectConnected: 'Week'});

    console.log(one);
    console.log(two);
    console.log(three);

    Storage.addTask('Today', one);
    Storage.addTask('', two);
    Storage.addTask('Week', three);

    console.log(Storage.getList().getProjects());
    console.log(Storage.getList());


    /* 
    const once = new Project('One');
    const twice = new Project('Two');

    once.addTask(one);
    twice.addTask(two);
 */
    
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
    
    /* const testArray = [];
    testArray.push(one, two);
    const testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));
    localStorage.setItem('testArray', JSON.stringify(testArray));

    // Retrieve the object from storage
    const retrieved1 = localStorage.getItem('testObject');
    const retrieved2 = localStorage.getItem('testArray');

    console.log('retrieved: ', JSON.parse(retrieved1));
    console.log('retrieved: ', JSON.parse(retrieved2)); */

  }

}


function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }