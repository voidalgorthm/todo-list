import initializePage from './page'
import Task from './task';
import Project from './project';
import Forms from './forms';
import Storage from './storage';

export default class Interface {

  static loadAll() {
    initializePage;
    Interface.test();
    Interface.loadALlProjects();
    Interface.setActiveButton('home');
    Interface.loadAllTasks();
    Interface.addEventButtons();
    Interface.addEventOtherButtons();
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

  static setActiveButton(id) {
    const sideButtons = document.querySelectorAll('.menu, .projects');
    sideButtons.forEach(button => {
      if (button.id === id) button.classList.add('active');
      else button.classList.remove('active');
    });
  }

  static loadTitle(label) {
    const title = document.querySelector('#content-title');

    const capitalized = capitalize(label);
    title.textContent = capitalized;
  }

  static loadALlProjects() {
    const userProjects = document.querySelector('#projects-user');
    userProjects.replaceChildren();
    Storage.getList().getAllProjects().forEach(project => {
      if (project.name === '') return;
      userProjects.append(Forms.createProjectContainer(project));
    });
    // console.log(Storage.getList().getAllProjects());
  }

  static test() {
  }

  static addEventOtherButtons() {
    const contentItems = document.querySelector('#content-items');
    const userProjectsContents = document.querySelector('#projects-user');

    const addTask = document.querySelector('#task-add');
    addTask.addEventListener('click', () => {
      const blankTask = new Task();
      contentItems.append(Forms.editTask(blankTask));
    });

    const addProject = document.querySelector('#project-add');
    addProject.addEventListener('click', () => {
      const blankProject = new Project();
      userProjectsContents.append(Forms.editProject(blankProject));
    });
  }
}

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }