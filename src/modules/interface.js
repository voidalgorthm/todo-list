import initializePage from './page'
import Task from './task';
import Project from './project';
import TodoList from './list';
import Forms from './forms';
import Storage from './storage';

export default class Interface {

  static loadAll() {
    initializePage;
    Interface.test();
    Interface.loadAllTasks();
  }

  static loadAllTasks() {
    const contentItems = document.querySelector('#content-items');
    contentItems.replaceChildren();
    Storage.getList().getAllTasks().forEach(task => {
      contentItems.append(Forms.createContainer(task));
    })
    console.log(Storage.getList());
  }

  static test() {
    const contentItems = document.querySelector('#content-items');
    const one = new Task({ title: 'One', description: 'one', dueDate: '2022-06-23', projectConnected: 'Today' });
    const two = new Task({ title: 'Two', description: 'two', priority: '1' });
    const three = new Task({ title: 'Three', projectConnected: 'Week' });
    // console.log(one);
    // console.log(two);
    // console.log(three);

    // Storage.addTask(one);
    // Storage.addTask(two);
    Storage.addTask(three);
    Storage.addTask(new Task({title: 'Four', projectConnected: 'Upcoming'}));
    // Storage.deleteTask('Three');
    // Storage.clearStorage();

    // Storage.addProject(new Project('GIT'));
    // Storage.deleteProject('ZeroOne');

    // contentItems.append(Forms.createTask());
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('One')));
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('Two')));
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('Three')));
    // contentItems.append(Forms.createContainer(Storage.getList().getTask('Four')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('One')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('Two')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('Three')));
    // contentItems.append(Forms.editTask(Storage.getList().getTask('Four')));

    console.log(Storage.getList());


  }

}

function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }