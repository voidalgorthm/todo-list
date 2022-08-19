import { isToday, isWithinInterval, addWeeks, addMonths } from 'date-fns';
import Project from './project';

export default class TodoList {
  constructor() {
    this.tasks = [];
    this.projects = [];
    this.projects.push(new Project(''));
    this.pMoves = [];
  }

  addTask(taskAdded) {
    if (this.tasks.find((task) => task.title === taskAdded.title)) return;
    this.tasks.push(taskAdded);
    this.addTaskProject(taskAdded);
  }

  addTaskProject(taskAddedProject) {
    if (this.containingProject(taskAddedProject.getProjectConnected()) === false) this.addProject(new Project(`${task.getProjectConnected()}`));
    this.getProject(taskAddedProject.getProjectConnected()).addProjectTask(taskAddedProject);
  }

  deleteTask(taskDeletedTitle) {
    if ((this.containingTask(taskDeletedTitle)) === false) return;
    const deletedTask = this.getTask(taskDeletedTitle);
    this.deleteTaskProject(deletedTask);
    const taskIndex = this.getTaskIndex(taskDeletedTitle);
    this.tasks.splice(taskIndex, 1);
  }

  deleteTaskProject(taskDeletedProject) {
    if (this.containingProject(taskDeletedProject.projectConnected) === false) return;
    this.getProject(taskDeletedProject.projectConnected).deleteProjectTask(taskDeletedProject);
  }

  replaceTask(taskReplacement, taskNameReplaced) {
    if ((this.containingTask(taskReplacement.title) &&
      (this.getProject(taskNameReplaced) === taskReplacement.projectConnected))) return;
    const taskReplaced = this.tasks.find((task) => task.title === taskNameReplaced);
    const taskReplacedIndex = this.getTaskIndex(taskNameReplaced);

    this.replaceTaskProject(taskReplaced, taskReplacement);
    this.tasks.splice(taskReplacedIndex, 1, taskReplacement);
  }

  replaceTaskProject(taskReplaced, taskReplacement) {
    const projectReplaced = this.getProject(taskReplaced.projectConnected);
    const projectReplacement = this.getProject(taskReplacement.projectConnected);
    if (projectReplaced === projectReplacement) {
      const taskProjectIndex = projectReplaced.getProjectTaskIndex(taskReplaced.title);
      projectReplaced.getProjectTasks().splice(taskProjectIndex, 1, taskReplacement);
    } else {
      projectReplaced.deleteProjectTask(taskReplaced);
      projectReplacement.addProjectTask(taskReplacement);
    }
  }

  getTask(taskTitle) {
    return this.tasks.find((task) => task.title === taskTitle);
  }

  containingTask(taskTitle) {
    return this.tasks.some((task) => task.title === taskTitle);
  }

  getTaskIndex(taskTitle) {
    return this.tasks.findIndex((task) => task.title === taskTitle);
  }

  getAllTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  addProject(addedProject) {
    if (this.projects.find((project) => project.getProjectName() === addedProject.name)) return;
    this.projects.push(addedProject);
  }

  deleteProject(deletedProjectName) {
    const projectIndex = this.projects.findIndex((project) => project.name === deletedProjectName);
    this.projects.splice(projectIndex, 1);
  }

  replaceProject(projectReplacement, projectNameReplaced) {
    if (this.containingProject(projectReplacement.title)) return;
    const projectReplaced = this.projects.find((project) => project.name === projectNameReplaced);
    const projectReplacedIndex = this.getProjectIndex(projectNameReplaced);

    this.projects.splice(projectReplacedIndex, 1, projectReplacement);
    this.updateProjectTasks(projectReplacement, projectReplaced);

  }

  updateProjectTasks(projectReplacement, projectReplaced) {
    console.log(projectReplaced);
    projectReplaced.getProjectTasks().forEach(task => {
      const index = this.getTaskIndex(task.title);
      console.log(index);
      task.setProjectConnected(projectReplacement.name);
      this.tasks.splice(index, 1, task);
    });
    this.getProject(projectReplacement.name).setProjectTasks(projectReplaced.getProjectTasks());
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getProjectName() === projectName);
  }

  containingProject(projectName) {
    return this.projects.some((project) => project.getProjectName() === projectName);
  }

  getProjectIndex(projectName) {
    return this.projects.findIndex((project) => project.name === projectName);
  }

  getAllProjects() {
    return this.projects;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getTasksToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dueDate);
      return isToday(taskDate);
    })
  }

  getTasksWeek() {
    return this.tasks.filter((task) => {
      const today = new Date();
      const week = addWeeks(new Date(today), 1);
      const taskDate = new Date(task.dueDate);
      return isWithinInterval(taskDate, { start: today, end: week });
    })
  }

  getTasksMonth() {
    return this.tasks.filter((task) => {
      const today = new Date();
      const month = addMonths(new Date(today), 1);
      const taskDate = new Date(task.dueDate);
      return isWithinInterval(taskDate, { start: today, end: month });
    })
  }

}