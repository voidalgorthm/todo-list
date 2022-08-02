import Project from './project';
import TodoList from './list';
import Task from './task';

export default class Storage {

  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getList() {
    const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todoList')));

    todoList.setProjects(
      todoList.getProjects().map((project) => Object.assign(new Project(), project))
    )

    todoList.getProjects().forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      )

    return todoList;
  }

  static addProject(project) {
    const todoList = Storage.getList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getList();
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }

}