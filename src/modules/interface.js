import initializePage from './page'
import Task from './task';
import Project from './project';
import Forms from './forms';
import Storage from './storage';

export default class Interface {

  static loadAll() {
    initializePage;
    // Interface.test();
    Interface.loadAllProjects();
    Interface.setActiveButton('home');
    Interface.loadAllTasks();
    Interface.addEventButtons();
    Interface.addEventOtherButtons();
  }

  static setActiveButton(id) {
    const sideButtons = document.querySelectorAll('.menu, .projects');
    sideButtons.forEach(button => {
      button.classList.contains('active')
        ? button.classList.add('preactive')
        : button.classList.remove('preactive');

      button.id === id
        ? button.classList.add('active')
        : button.classList.remove('active');
    });
  }

  static loadAllTasks() {
    const contentItems = document.querySelector('#content-items');
    contentItems.replaceChildren();

    const active = document.querySelector('.active');
    const tasksContainer = (active.id === 'home') ? Storage.getList().getAllTasks() :
      (active.id === 'today') ? Storage.getList().getTasksToday() :
        (active.id === 'week') ? Storage.getList().getTasksWeek() :
          (active.id === 'upcoming') ? Storage.getList().getTasksMonth() :
            Storage.getList().getProject(`${active.id.split('-')[1]}`).getProjectTasks();

    tasksContainer.forEach(task => {
      contentItems.append(Forms.createTaskContainer(task));
    })
    console.log(Storage.getList());
  }

  static addEventButtons() {
    const sideButtons = document.querySelectorAll('.menu, .projects');
    sideButtons.forEach(button => {
      button.addEventListener('click', () => {
        const label = (button.id.includes('project-')) ? button.id.split('-')[1] : button.id;
        Interface.loadTitle(label);
        Interface.setActiveButton(button.id);
        Interface.loadAllTasks();
      })
    });
  }

  static loadTitle(label) {
    const title = document.querySelector('#content-title');
    const capitalized = capitalize(label);
    title.textContent = capitalized;
  }

  static test() {
    const task = new Task({title: `tasker`});
    console.log(task);
    const taskete = {...task, title: `taskete`};
    console.log(taskete);
    console.log(task);
  }

  static loadAllProjects() {
    const userProjects = document.querySelector('#projects-user');
    userProjects.replaceChildren();
    Storage.getList().getAllProjects().forEach(project => {
      if (project.name === '') return;
      userProjects.append(Forms.createProjectContainer(project));
    });
    // console.log(Storage.getList().getAllProjects());
  }

  static addEventOtherButtons() {
    const contentItems = document.querySelector('#content-items');
    const userProjects = document.querySelector('#projects-user');

    const addTask = document.querySelector('#add-task');
    addTask.addEventListener('click', () => {
      const blankTask = new Task();
      contentItems.append(Forms.editTask(blankTask));
      const form = document.querySelector('form');
      form.querySelector('.editTaskPriority').focus();
    });

    const addProject = document.querySelector('#add-project');
    addProject.addEventListener('click', () => {
      const blankProject = new Project();
      userProjects.append(Forms.editProject(blankProject));
    });
  }
}

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
// function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }