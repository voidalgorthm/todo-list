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

  static clearStorage() {
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

  static replaceTaskSave(task) {
    const todoList = Storage.getList();
    todoList.replaceTask(task);
    Storage.saveList(todoList);
  }

  static addProject(project) {
    const todoList = Storage.getList();
    todoList.addProject(project);
    Storage.saveList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getList();
    if (todoList.containingProject(projectName)) {
      todoList.deleteProject(projectName);
    }
    Storage.saveList(todoList);
  }

}