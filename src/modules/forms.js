import { format } from 'date-fns';
import Interface from './interface';
import Project from './project';
import Storage from './storage';
import Task from './task';

export default class Forms {
  static createTaskContainer(task) {
    const taskPreview = document.createElement('div');
    taskPreview.classList.add('taskPreview');
    taskPreview.classList.add('width-100');

    taskPreview.append(this.createTask(task));
    return taskPreview;
  }

  static createTask({ title, projectConnected, description, priority, dueDate } = {}) {
    const taskDisplay = document.createElement('div');
    taskDisplay.classList.add('taskDisplay');
    taskDisplay.classList.add('grid');
    taskDisplay.classList.add('width-100');
    taskDisplay.classList.add('gap');

    const taskCheck = document.createElement('input');
    setKeyValue(taskCheck, { type: 'checkbox' });
    taskCheck.classList.add('taskCheck');
    const taskTitle = document.createElement('input');
    setKeyValue(taskTitle, { type: 'text', name: 'title', readonly: "readonly" });
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
      container.append(this.editTask({ title, projectConnected, description, priority, dueDate }, true));
    });
    const taskDelete = document.createElement('img');
    setKeyValue(taskDelete, { src: 'delete.svg', name: 'delete', class: '' });
    taskDelete.classList.add('taskDelete');
    taskDelete.addEventListener('click', () => {
      const active = document.querySelector('.active');
      Storage.deleteTaskSave(taskTitle.value);
      Interface.loadALlProjects();
      Interface.setActiveButton(active.id);
      Interface.addEventButtons();
      Interface.loadAllTasks();
    });

    taskDisplay.append(taskCheck, taskTitle, taskDate, taskEdit, taskDelete);
    return taskDisplay;
  }

  static editTask({ title, projectConnected = '', description = '', priority = 5, dueDate = 'No date' } = {}, editing = false) {
    const taskForm = document.createElement("form");
    setKeyValue(taskForm, { method: 'post', id: 'taskForm' });
    taskForm.classList.add('width-100');

    const editTask = document.createElement('div');
    editTask.setAttribute('id', 'editTask');
    editTask.classList.add('editTask');

    const editTaskTitle = document.createElement('textarea');
    setKeyValue(editTaskTitle, { name: 'title', placeholder: 'Title: Cook', maxlength: '35', required: 'true' });
    editTaskTitle.classList.add('editTaskTitle');
    if (title) editTaskTitle.value = title;
    const taskNameReplaced = title;

    const editTaskDescription = document.createElement('textarea');
    setKeyValue(editTaskDescription, { name: 'description', placeholder: 'Description: e.g. Cook for dinner' });
    editTaskDescription.classList.add('editTaskDescription');
    if (description) editTaskDescription.value = description;

    const editTaskDate = document.createElement('input');
    setKeyValue(editTaskDate, { name: 'dueDate', type: 'date' });
    editTaskDate.classList.add('editTaskDate');
    const today = new Date().toISOString().split('T')[0];
    editTaskDate.setAttribute('min', today);
    if (dueDate) editTaskDate.value = dueDate;

    const editTaskPriority = document.createElement('select');
    setKeyValue(editTaskPriority, { name: 'priority' });
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
    setKeyValue(editTaskProject, { name: 'projectConnected' });
    Storage.getList().getAllProjects().forEach(project => {
      const option = document.createElement('option');
      option.setAttribute('value', `${project.name}`);
      option.textContent = `${project.name}`;
      editTaskProject.append(option);
    });
    editTaskProject.classList.add('editTaskProject');
    if (editTaskProject) editTaskProject.value = projectConnected;

    const taskAccept = document.createElement('button');
    taskAccept.textContent = "Accept";
    setKeyValue(taskAccept, { type: 'submit', form: 'taskForm', formaction: 'post' });
    taskAccept.classList.add('taskAccept');
    const taskCancel = document.createElement('button');
    taskCancel.textContent = "Cancel";
    taskCancel.classList.add('taskCancel');
    taskCancel.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode.parentNode;
      const active = document.querySelector('.active');
      container.replaceChildren();
      container.append(this.createTask({ title, projectConnected, description, priority, dueDate }));

      Interface.loadALlProjects();
      Interface.setActiveButton(active.id);
      Interface.addEventButtons();
      Interface.loadAllTasks();
    });

    editTaskPriority.focus();
    editTask.append(editTaskPriority, editTaskTitle, editTaskDescription, editTaskDate, editTaskProject, taskAccept, taskCancel);
    taskForm.append(editTask);

    taskForm.addEventListener('submit', (event) => {
      const active = document.querySelector('.active');
      event.preventDefault();
      const data = new FormData(event.target);
      const newTask = new Task(Object.fromEntries(data));

      if (editing) Storage.replaceTaskSave(newTask, taskNameReplaced);
      else Storage.addTaskSave(newTask);
      
      Interface.loadALlProjects();
      Interface.setActiveButton(active.id);
      Interface.addEventButtons();
      Interface.loadAllTasks();
    });

    return taskForm;
  }

  static createProjectContainer(project) {
    const projectPreview = document.createElement('div');
    projectPreview.classList.add('projectPreview');
    projectPreview.classList.add('width-100');

    projectPreview.append(this.createProjects(project));
    return projectPreview;
  }

  static createProjects(project) {
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('projectDisplay');
    projectDisplay.classList.add('grid');
    projectDisplay.classList.add('gap');

    const projectNumbers = document.createElement('label');
    projectNumbers.textContent = `${project.projectTasks.length}`;
    const projectSelect = document.createElement('button');
    projectSelect.setAttribute('id', `project-${project.name}`);
    projectSelect.classList.add('projects');

    projectSelect.textContent = `${project.name}`;

    projectDisplay.append(projectNumbers, projectSelect);
    projectDisplay.addEventListener('dblclick', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.editProject(project, true));
    })
    return projectDisplay;
  }

  static editProject({ name = '', projectTasks = [] } = {}, editing = false) {
    const projectForm = document.createElement("form");
    setKeyValue(projectForm, { method: 'post', id: 'projectForm' });
    projectForm.classList.add('width-100');

    const editProject = document.createElement('div');
    editProject.setAttribute('id', 'editProject');
    editProject.classList.add('editProject');

    const editProjectName = document.createElement('input');
    setKeyValue(editProjectName, { name: 'name', type: 'text', placeholder: 'Project name: Chores', maxlength: '35', required: 'true' });
    editProjectName.classList.add('width-100');
    editProjectName.classList.add('editProjectName');
    if (name) editProjectName.value = name;
    const projectNameReplaced = name;

    const projectAccept = document.createElement('button');
    projectAccept.textContent = "Accept";
    setKeyValue(projectAccept, { type: 'submit', form: 'projectForm', formaction: 'post' });
    projectAccept.classList.add('projectAccept');
    const projectCancel = document.createElement('button');
    projectCancel.textContent = "Cancel";
    projectCancel.classList.add('projectCancel');
    projectCancel.addEventListener('click', (event) => {
      const container = event.target.parentNode.parentNode;
      container.replaceChildren();
      container.append(this.createProjects({ name, projectTasks }));

      const identification = `project-${editProjectName.value}`;
      Interface.loadALlProjects();
      Interface.setActiveButton(identification);
      Interface.addEventButtons();
      Interface.setActiveButton(editProjectName.value);
      Interface.loadAllTasks();
    });

    editProject.append(editProjectName, projectAccept, projectCancel);
    projectForm.append(editProject);

    projectForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (editProjectName === '') return;
      const data = new FormData(event.target);
      const newName = data.get('name');
      const newProject = new Project(newName, projectTasks);

      if (editing) Storage.replaceProjectSave(newProject, projectNameReplaced);
      else Storage.addProjectSave(newProject);

      const identification = `project-${editProjectName.value}`;
      Interface.loadALlProjects();
      Interface.setActiveButton(identification);
      Interface.addEventButtons();
      Interface.loadTitle(editProjectName.value);
      Interface.loadAllTasks();
    });

    return projectForm;
  }

}

function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }