import { format } from 'date-fns';
import Interface from './interface';
import Storage from './storage';
import Task from './task';

export default class Forms {
  static createContainer({ title, projectConnected, description, priority, dueDate } = {}) {
    const taskPreview = document.createElement('div');
    taskPreview.classList.add('taskPreview');

    taskPreview.append(this.createTask({ title, projectConnected, description, priority, dueDate }));
    // { title, projectConnected, description, priority, dueDate}
    return taskPreview;
  }

  static createTask({ title, projectConnected, description, priority, dueDate } = {}) {
    const taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay');
    taskDisplay.classList.add('gap');

    const taskCheck = document.createElement('input');
    setKeyValue(taskCheck, { type: 'checkbox' });
    taskCheck.classList.add('taskCheck');
    const taskTitle = document.createElement('input');
    setKeyValue(taskTitle, { type: 'text', name: 'title', readonly: "readonly"});
    taskTitle.classList.add('taskTitle');
    if (title) taskTitle.value = title;
    const taskDate = document.createElement('input');
    setKeyValue(taskDate, { type: 'date', name: 'date', readonly: "readonly" });
    taskDate.classList.add('taskDate');
    if (dueDate) taskDate.value = dueDate;
    const taskEdit = document.createElement('img');
    taskEdit.classList.add('taskEdit');
    setKeyValue(taskEdit, { src: 'edit.svg', name: 'edit', class: '' });
    taskEdit.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.editTask({ title, projectConnected, description, priority, dueDate }));
    });
    const taskDelete = document.createElement('img');
    setKeyValue(taskDelete, { src: 'delete.svg', name: 'delete', class: '' });
    taskDelete.classList.add('taskDelete');
    taskDelete.addEventListener('click', () => {
      Storage.deleteTaskSave(taskTitle.value);
      Interface.loadAllTasks();
    });

    taskDisplay.append(taskCheck, taskTitle, taskDate, taskEdit, taskDelete);
    return taskDisplay;
  }

  static editTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date' } = {}) {
    const editForm = document.createElement("form");
    setKeyValue(editForm, { method: 'post', id: 'editForm' });
    editForm.classList.add('editForm');

    const editTask = document.createElement('div');
    editTask.setAttribute('id', 'editTask');
    editTask.classList.add('editTask');

    const editTaskTitle = document.createElement('textarea');
    setKeyValue(editTaskTitle, { id: 'editTaskTitle', name: 'title', placeholder: 'Title: Cook', maxlength: '35', required: 'true' });
    editTaskTitle.classList.add('editTaskTitle');
    if (title) editTaskTitle.value = title;

    const editTaskDescription = document.createElement('textarea');
    setKeyValue(editTaskDescription, { id: 'editTaskDescription', name: 'description', placeholder: 'Description: e.g. Cook for dinner' });
    editTaskDescription.classList.add('editTaskDescription');
    if (description) editTaskDescription.value = description;

    const editTaskDate = document.createElement('input');
    setKeyValue(editTaskDate, { id: 'editTaskDate', name: 'dueDate', type: 'date' });
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
    setKeyValue(editTaskProject, { id: 'editTaskProject', name: 'projectConnected' });
    Storage.getList().getAllProjects().forEach(project => {
      const option = document.createElement('option');
      option.setAttribute('value', `${project.name}`);
      option.textContent = `${project.name}`;
      editTaskProject.append(option);
    });
    editTaskProject.classList.add('editTaskProject');
    if (editTaskProject) editTaskProject.value = projectConnected;

    const editAccept = document.createElement('button');
    editAccept.textContent = "Accept";
    setKeyValue(editAccept, { type: 'submit', form: 'editForm', formaction: 'post' });
    editAccept.classList.add('editAccept');
    const editCancel = document.createElement('button');
    editCancel.textContent = "Cancel";
    editCancel.classList.add('editCancel');
    editCancel.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.createTask({ title, projectConnected, description, priority, dueDate }));

      Interface.loadAllTasks();
    });

    editTask.append(editTaskPriority, editTaskTitle, editTaskDescription, editTaskDate, editTaskProject, editAccept, editCancel);
    editForm.append(editTask);

    editForm.addEventListener('submit', (event) => {
      event.preventDefault();

      /*console.log(...data.entries());
      const newTask = [...new FormData(event.target)].reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
      }) */
      const data = new FormData(event.target);
      const newTask = new Task(Object.fromEntries(data));

      if (Storage.getList().containingTask(newTask.title)) {
        Storage.replaceTaskSave(newTask);
      } else {
        Storage.addTaskSave(newTask);
      }
      // let validTitle = checkTitle(), validAuthor = checkAuthor(), validPages = checkPages();
      // let validForm = validTitle && validAuthor && validPages;

      // if (!validForm) form.querySelector('input.error').focus();

      // if (validForm) {
      // const rawData = getFormData(editForm);
      // console.log(rawData);
      // const newTask = new Task(...rawData);
      // console.log(newTask);

      const index = Storage.getList().getTaskIndex(title);
      // Storage.getList().getAllTasks().splice(index, 1, newTask);
      // Storage.saveList();
      Interface.loadAllTasks();
      // }
    });


    // console.log(index);
    // this.editTask(container.splice(index, 1, {title, projectConnected, description, priority, dueDate}));
    // Storage.getList().getAllTasks().splice(index, 1, {title, projectConnected, description, priority, dueDate});
    // container.append(this.editTask({title, projectConnected, description, priority, dueDate}));

    return editForm;
  }

}

function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }