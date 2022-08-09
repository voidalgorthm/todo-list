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

  getDateFormatted() {
    const year = this.dueDate.split('/')[0];
    const month = this.dueDate.split('/')[1];
    const day = this.dueDate.split('/')[2];
    return `${month}/${day}/${year}`
  }

}