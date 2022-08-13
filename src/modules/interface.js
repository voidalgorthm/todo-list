import initializePage from './page'
import Task from './task';
import Project from './project';
import TodoList from './list';
import Forms from './forms';
import Storage from './storage';

export default class Interface {

  static loadAll() {
    initializePage;
    // Interface.test();
    Interface.loadAllTasks();
    Interface.loadALlProjects();
  }

  static loadAllTasks() {
    const contentItems = document.querySelector('#content-items');
    contentItems.replaceChildren();
    Storage.getList().getAllTasks().forEach(task => {
      contentItems.append(Forms.createTaskContainer(task));
    })
    console.log(Storage.getList());
  }

  static loadALlProjects() {
    const userProjects = document.querySelector('#projects-user');
    userProjects.replaceChildren();
    Storage.getList().getAllProjects().forEach(project => {
      if(project.name === '') return;
      userProjects.append(Forms.createProjectContainer(project));
    });

    // console.log(Storage.getList().getAllProjects());
  }

  static test() {
    const userProjects = document.querySelector('#projects-user');
    Storage.getList().getAllProjects().forEach(project => {
      console.log(project.getProjectTasksLength());
    });

    console.log(Storage.getList().getAllProjects());

    // console.log(Storage.getList());

  }

}

function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }