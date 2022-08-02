import initializePage from './page'
import Task from './task';
import Project from './project';
import TodoList from './list';
import Storage from './storage';

export default class Interface {

  static loadAll() {
    initializePage;
    Interface.loadAllTasks();
  }

  static loadAllTasks() {
    Interface.test();

  }

  static test() {
    const taskit = new Task({ title: 'taskit', description: 'tasketit', dueDate: '06/06/2022', projectConnected: 'Yamete' });
    const taskya = new Task({ title: 'taskya', description: 'taskya', notes: 'taskyaya' });

    const yamete = new Project('Yamete');
    const kudasai = new Project('Kudasai');

    yamete.addTask(taskit);
    kudasai.addTask(taskya);
    
    console.log(Storage.getList());

    Storage.getList().addProject(yamete);
    Storage.getList().addProject(kudasai);

    console.log(Storage.getList());

    /* const testArray = [];
    testArray.push(taskit, taskya);
    const testObject = { 'one': 1, 'two': 2, 'three': 3 };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));
    localStorage.setItem('testArray', JSON.stringify(testArray));

    // Retrieve the object from storage
    const retrieved1 = localStorage.getItem('testObject');
    const retrieved2 = localStorage.getItem('testArray');

    console.log('retrieved: ', JSON.parse(retrieved1));
    console.log('retrieved: ', JSON.parse(retrieved2)); */

    const main = document.querySelector('#content-items');
    const date = document.createElement('input');
    setKeyValue(date, { type: 'date' });
    main.append(date);

    date.addEventListener('change', (event) => {
      console.log(event.target.value);
    })
  }


}




function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }