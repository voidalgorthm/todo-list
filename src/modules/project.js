export default class Project {
  constructor(name) {
    this.name = name;
    this.projectTasks = [];
  }

  setProjectName(name) {
    this.name = name;
  }

  getProjectName() {
    return this.name;
  }

  addProjectTask(addedTaskCopy) {
    if (this.projectTasks.find((task) => task.getTitle() === addedTaskCopy.title)) return;
    this.projectTasks.push(addedTaskCopy);
  }
  
  deleteProjectTask(deletedTaskCopy) {
    if ((this.projectTasks.some((task) => task.getTitle() === deletedTaskCopy.title) === false)) return;
    this.projectTasks = this.projectTasks.filter((task) => task.getTitle() !== deletedTaskCopy.title);
  }

  getProjectTasks() {
    return this.projectTasks;
  }

  getProjectTask(taskName) {
    return this.projectTasks.find((task) => task.getTitle() === taskName);
  }

  containingProjectTask(taskName) {
    return this.projectTasks.some((task) => task.getTitle() === taskName);
  }

  getProjectTaskIndex(taskTitle) {
    return this.projectTasks.findIndex((task) => task.title === taskTitle);
  }

  extractProjectTask(taskName) {
    const index = this.projectTasks.findIndex((task) => task.getName() === taskName);
    return this.projectTasks.splice(index, 1);
  }

  setProjectTasks(tasks) {
    this.projectTasks = tasks;
  }

}