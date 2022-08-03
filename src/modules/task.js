export default class Task {
  constructor({ title, description = '', priority = 5, dueDate = 'No date', projectConnected = '' } = {}) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.projectConnected = projectConnected;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
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

  setProjectConnected(projectConnected) {
    this.projectConnected = projectConnected;
  }

  getProjectConnected() {
    return this.projectConnected;
  }
}