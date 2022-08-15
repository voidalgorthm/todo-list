export default class Task {
  constructor({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    this.title = title;
    this.projectConnected = projectConnected;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setProjectConnected(projectConnected) {
    this.projectConnected = projectConnected;
  }

  getProjectConnected() {
    return this.projectConnected;
  }

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  setPriority(priority) {
    this.priority = priority;
  }

  getPriority() {
    return this.priority;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }
}