import Project from './project';
import Task from './task';

export default class TodoList {
  constructor() {
    this.tasks = [];
    this.projects = [];
    this.projects.push(new Project(''));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('Week'));
    this.projects.push(new Project('Upcoming'));
  }

  addTask(taskAdded) {
    // console.log(this.getTask(taskAdded.title) === 'undefined');
    // if (!(this.containingTask(taskAdded.title))) return;
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

  replaceTask(taskReplacement) {
    if ((this.containingTask(taskReplacement.title)) === false) return;
    
    const taskReplaced = this.tasks.find((task) => task.title === taskReplacement.title)
    console.log(taskReplaced);
    const projectReplaced = this.getProject(taskReplaced.projectConnected)
    console.log(projectReplaced);
    projectReplaced.deleteProjectTask(taskReplaced);

    const taskReplacedIndex = this.getTaskIndex(taskReplacement.title);
    this.tasks.splice(taskReplacedIndex, 1, taskReplacement);
    this.replaceTaskProject(taskReplacement);
  }

  replaceTaskProject(taskReplaceProject) {
    if (this.containingProject(taskReplaceProject.projectConnected) === false) return;
    const project = this.getProject(taskReplaceProject.projectConnected);
    const taskProjectIndex = project.getProjectTaskIndex(taskReplaceProject.title);
    project.getProjectTasks().splice(taskProjectIndex, 1, taskReplaceProject);
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

  getAllProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getProjectName() === projectName);
  }

  containingProject(projectName) {
    return this.projects.some((project) => project.getProjectName() === projectName);
  }

  addProject(addedProject) {
    if (this.projects.find((project) => project.getProjectName() === addedProject.name)) return;
    this.projects.push(addedProject);
  }

  deleteProject(deletedProject) {
    const projectIndex = this.projects.findIndex((project) => project.getProjectName() === deletedProject);
    this.projects.splice(projectIndex, 1);
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  setProjects(projects) {
    this.projects = projects;
  }

}