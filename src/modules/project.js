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

  setProjectTasks(tasks) {
    this.projectTasks = tasks;
  }

  getProjectTasks() {
    return this.projectTasks;
  }

  getProjectTask(taskName) {
    return this.projectTasks.find((task) => task.getTitle() === taskName);
  }

  extractProjectTask(taskName) {
    const index = this.projectTasks.findIndex((task) => task.getName() === taskName);
    return this.projectTasks.splice(index, 1);
  }

  containingProjectTask(taskName) {
    return this.projectTasks.some((task) => task.getTitle() === taskName);
  }

  addProjectTask(addedTaskCopy) {
    if (this.projectTasks.find((task) => task.getTitle() === addedTaskCopy.title)) return;
    this.projectTasks.push(addedTaskCopy);
  }

  deleteProjectTask(deletedTaskCopy) {
    this.projectTasks = this.projectTasks.filter((task) => task.title !== deletedTaskCopy.title);
  }

}