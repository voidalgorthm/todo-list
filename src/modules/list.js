import Project from './project';

export default class TodoList {
  constructor() {
    this.tasks = [];
    this.projects = [];
    this.projects.push(new Project(''));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('Week'));
    this.projects.push(new Project('Upcoming'));
  }

  addTask(addedTaskOrig) {
    if (this.tasks.find((task) => task.title === addedTaskOrig.title)) return;
    this.tasks.push(addedTaskOrig);
  }

  getTask(taskTitle) {
    return this.tasks.find((task) => task.title === taskTitle);
  }

  containingTask(taskTitle) {
    return this.tasks.some((task) => task.title === taskTitle);
  }

  deleteTask(deletedTaskOrig) {
      const taskIndex = this.tasks.findIndex((task) => task.title === deletedTaskOrig);
      this.tasks.splice(taskIndex, 1);
  }

  getAllTasks() {
    return this.tasks;
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
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

}