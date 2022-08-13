export default class Project {
  constructor(name, projectTasks = []) {
    this.name = name;
    this.projectTasks = projectTasks;
  }

  addProjectTask(addedTaskCopy) {
    if (this.projectTasks.find((task) => task.getTitle() === addedTaskCopy.title)) return;
    this.projectTasks.push(addedTaskCopy);
  }
  
  deleteProjectTask(deletedTaskCopy) {
    if ((this.projectTasks.some((task) => task.getTitle() === deletedTaskCopy.title) === false)) return;
    this.projectTasks = this.projectTasks.filter((task) => task.getTitle() !== deletedTaskCopy.title);
  }

  getProjectTask(taskName) {
    return this.projectTasks.find((task) => task.getTitle() === taskName);
  }

  containingProjectTask(taskName) {
    return this.projectTasks.some((task) => task.getTitle() === taskName);
  }

  getProjectTasksLength() {
    return this.projectTasks.length;
  }

  getProjectTaskIndex(taskTitle) {
    return this.projectTasks.findIndex((task) => task.title === taskTitle);
  }

  extractProjectTask(taskName) {
    const index = this.projectTasks.findIndex((task) => task.getName() === taskName);
    return this.projectTasks.splice(index, 1);
  }

  getProjectName() {
    return this.name;
  }

  setProjectName(name) {
    this.name = name;
  }

  getProjectTasks() {
    return this.projectTasks;
  }

  setProjectTasks(tasks) {
    this.projectTasks = tasks;
  }
}