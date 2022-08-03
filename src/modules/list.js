import Project from './project';

export default class TodoList {
  constructor() {
    this.projects = [];
    this.tasks = [];
    this.projects.push(new Project(''));
    this.projects.push(new Project('Today'));
    this.projects.push(new Project('Week'));
    this.projects.push(new Project('Upcoming'));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getName() === projectName);
  }

  containingProject(projectName) {
    return this.projects.some((project) => project.getName() === projectName);
  }

  addProject(addedProject) {
    if (this.projects.find((project) => project.name === addedProject.name)) return;
    this.projects.push(addedProject);
  }

  deleteProject(deletedProject) {
    const projectDeletion = this.projects.find((project) => project.getName() === deletedProject);
    this.projects.splice(this.projects.indexOf(projectDeletion), 1);
  }

}