import { format } from 'date-fns';
import Interface from './interface';
import Storage from './storage';

export default class Forms {
  static createContainer({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    const taskPreview = document.createElement('div');
    taskPreview.classList.add('taskPreview');

    taskPreview.append(this.createTask({ title, projectConnected, description, priority, dueDate}));
    // { title, projectConnected, description, priority, dueDate}
    return taskPreview;
  }

  static createTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    const taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay');
    taskDisplay.classList.add('gap');
    
    const taskCheck = document.createElement('input');
    setKeyValue(taskCheck, { type: 'checkbox' });
    taskCheck.classList.add('taskCheck');
    const taskTitle = document.createElement('input');
    setKeyValue(taskTitle, { type: 'text', name: 'title' });
    taskTitle.classList.add('taskTitle');
    if (title) taskTitle.value = title;
    const taskDate = document.createElement('input');
    setKeyValue(taskDate, { type: 'date', name: 'date' });
    taskDate.classList.add('taskDate');
    if (dueDate) taskDate.value = dueDate;
    const taskEdit = document.createElement('img');
    taskEdit.classList.add('taskEdit');
    setKeyValue(taskEdit, { src: 'edit.svg', name: 'edit', class: '' });
    taskEdit.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.editTask(title, projectConnected, description, priority, dueDate));
    })
    const taskDelete = document.createElement('img');
    setKeyValue(taskDelete, { src: 'delete.svg', name: 'delete', class: '' });
    taskDelete.classList.add('taskDelete');
    taskDelete.addEventListener('click', () => {
      Storage.deleteTask(taskTitle.value);
      Interface.loadAllTasks();
    })

    taskDisplay.append(taskCheck, taskTitle, taskDate, taskEdit, taskDelete);
    return taskDisplay;
  }

  static editTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date'} = {}) {
    const editForm = document.createElement("form");
    editForm.setAttribute('id', 'editForm');
    editForm.classList.add('editForm');

    const editTask = document.createElement('div');
    editTask.setAttribute('id', 'editTask');
    editTask.classList.add('editTask');
    // const topTaskContainer = document.createElement('div');
    // topTaskContainer.setAttribute('id', 'topTaskContainer');

    const editTaskTitle = document.createElement('textarea');
    setKeyValue(editTaskTitle, { id: 'editTaskTitle', name: 'title', placeholder: 'Title: Cook', maxlength: '35', required: 'true' });
    editTaskTitle.classList.add('editTaskTitle');
    if (title) editTaskTitle.value = title;

    const editTaskDescription = document.createElement('textarea');
    setKeyValue(editTaskDescription, { id: 'editTaskDescription', name: 'description', placeholder: 'Description: e.g. Cook for dinner' });
    editTaskDescription.classList.add('editTaskDescription');
    if (description) editTaskDescription.value = description;

    const editTaskDate = document.createElement('input');
    setKeyValue(editTaskDate, { id: 'editTaskDate', name: 'date', type: 'date' });
    editTaskDate.classList.add('editTaskDate');
    if (dueDate) editTaskDate.value = dueDate;

    const editTaskPriority = document.createElement('select');
    setKeyValue(editTaskPriority, { id: 'editTaskPriority', name: 'priority' });
    const priorityLevels = [...Array(5).keys()].map(i => i + 1);
    priorityLevels.forEach(prio => {
      const option = document.createElement('option');
      option.setAttribute('value', `${prio}`);
      if (prio === 3) option.setAttribute('selected', 'true');
      option.textContent = `${prio}`;
      editTaskPriority.append(option);
    })
    editTaskPriority.classList.add('editTaskPriority');
    if (priority) editTaskPriority.value = priority;

    const editTaskProject = document.createElement('select');
    setKeyValue(editTaskProject, { id: 'editTaskProject', name: 'editTaskProject' });
    Storage.getList().getProjects().forEach(project => {
      const option = document.createElement('option');
      option.setAttribute('value', `${project.name}`);
      option.textContent = `${project.name}`;
      editTaskProject.append(option);
    });
    editTaskProject.classList.add('editTaskProject');
    if (editTaskProject) editTaskProject.value = projectConnected;

  /*   const topArea = document.createElement('div');
    topArea.append(editTaskPriority, editTaskTitle);
    topArea.classList.add('flex-row');
    topArea.classList.add('evenly');
    const midArea = document.createElement('div');
    midArea.append(editTaskDescription);
    const botArea = document.createElement('div');
    botArea.append(editTaskDate, editTaskProject);
    botArea.classList.add('flex-row');
    botArea.classList.add('evenly');

    topTaskContainer.append(topArea, midArea, botArea);
    topTaskContainer.classList.add('flex-column');
    topTaskContainer.classList.add('evenly');

    const botTaskContainer = document.createElement('div');
    botTaskContainer.setAttribute('id', 'botTaskContainer'); */

    const accept = document.createElement('button');
    accept.textContent = "Accept";
    accept.classList.add('accept');
    const cancel = document.createElement('button');
    cancel.textContent = "Cancel";
    cancel.classList.add('cancel');

    editTask.append(editTaskPriority, editTaskTitle, editTaskDescription, editTaskDate, editTaskProject, accept, cancel);

    /* botTaskContainer.append(accept, cancel);

    editForm.append(topTaskContainer, botTaskContainer); */
    editForm.append(editTask);

    return editForm;
  }

}


function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }