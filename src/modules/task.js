export default class Task {
  constructor({title, description, priority = 3, dueDate = 'No date', affiliation = 'none', notes = 'none'} = {}) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.affiliation = affiliation;
    this.notes = notes;
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
    const day = this.dueDate.split('/')[0]
    const month = this.dueDate.split('/')[1]
    const year = this.dueDate.split('/')[2]
    return `${month}/${day}/${year}`
  }

  setAffiliation(affiliation) {
    this.affiliation = affiliation;
  }

  getAffiliation() {
    return this.affiliation;
  }

  setNotes(notes) {
    this.notes = notes;
  }

  getNotes() {
    return this.notes;
  }
}