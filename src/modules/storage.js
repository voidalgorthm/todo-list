import Project from './project';
import TodoList from './list';
import Task from './task';

export default class Storage {

  static saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getList() {
    const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todoList')));

    todoList.setTasks(todoList.getAllTasks().map((task) => Object.assign(new Task(), task)));

    todoList.setProjects(todoList.getAllProjects().map((project) => Object.assign(new Project(), project)));

    todoList.getAllProjects().forEach((project) => project.setProjectTasks(
      project.getProjectTasks().map((task) => Object.assign(new Task(), task))
    ));

    return todoList;
  }

  static showStorage() {
    return localStorage;
  }

  static clearStorage() {
    if(localStorage.length === 0) return;
    localStorage.clear();
  }

  static addTaskSave(task) {
    const todoList = Storage.getList();
    todoList.addTask(task);
    Storage.saveList(todoList);
  }

  static deleteTaskSave(taskTitle) {
    const todoList = Storage.getList();
    todoList.deleteTask(taskTitle);
    Storage.saveList(todoList);
  }

  static replaceTaskSave(newTask, oldTaskName) {
    const todoList = Storage.getList();
    todoList.replaceTask(newTask, oldTaskName);
    Storage.saveList(todoList);
  }

  static addProjectSave(project) {
    const todoList = Storage.getList();
    todoList.addProject(project);
    Storage.saveList(todoList);
  }

  static deleteProjectSave(projectName) {
    const todoList = Storage.getList();
      todoList.deleteProject(projectName);
    Storage.saveList(todoList);
  }

  static replaceProjectSave(newProject, oldProjectName) {
    const todoList = Storage.getList();
    todoList.replaceProject(newProject, oldProjectName);
    Storage.saveList(todoList);
  }

}