import Storage from './storage';

export default class Forms {
  constructor(title, description, priority, dueDate, projectConnected) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.projectConnected = projectConnected;
  }

  static createForm({ title, description = '', priority = 5, dueDate = 'No date', projectConnected = '' } = {}) {
    const formContainer = document.createElement("form");
    formContainer.setAttribute('id', 'formContainer');

    const topTaskContainer = document.createElement('div');
    topTaskContainer.setAttribute('id', 'topTaskContainer');

    const taskTitle = document.createElement('textarea');
    setKeyValue(taskTitle, { id: 'taskTitle', name: 'title', placeholder: 'Title: Cook', maxlength: '35', required: 'true' });
    if (title) taskTitle.value = title;

    const taskDescription = document.createElement('textarea');
    setKeyValue(taskDescription, { id: 'taskDescription', name: 'description', placeholder: 'Description: e.g. Cook for dinner' });
    if (description) taskDescription.value = description;

    const taskDate = document.createElement('input');
    setKeyValue(taskDate, { id: 'taskDate', name: 'date', type: 'date' });
    if (dueDate) taskDate.value = dueDate;

    const taskPriority = document.createElement('select');
    setKeyValue(taskPriority, { id: 'taskPriority', name: 'priority' });
    const priorityLevels = [...Array(5).keys()].map(i => i + 1);
    priorityLevels.forEach(prio => {
      const option = document.createElement('option');
      option.setAttribute('value', `${prio}`);
      if (prio === 3) option.setAttribute('selected', 'true');
      option.textContent = `${prio}`;
      taskPriority.append(option);
    })
    if (priority) taskPriority.value = priority;

    const taskProjectConnected = document.createElement('select');
    setKeyValue(taskProjectConnected, { id: 'taskProjectConnected', name: 'taskProjectConnected' });
    Storage.getList().getProjects().forEach(project => {
      const option = document.createElement('option');
      option.setAttribute('value', `${project.name}`);
      option.textContent = `${project.name}`;
      taskProjectConnected.append(option);
    });
    if (taskProjectConnected) taskProjectConnected.value = projectConnected;

    topTaskContainer.append(taskPriority, taskTitle, taskDescription, taskDate, taskProjectConnected);

    const botTaskContainer = document.createElement('div');
    botTaskContainer.setAttribute('id', 'botTaskContainer');

    const accept = document.createElement('button');
    accept.textContent = "Accept";
    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";

    botTaskContainer.append(accept, cancel);

    formContainer.append(topTaskContainer, botTaskContainer);

    return formContainer;
  }

}


function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }