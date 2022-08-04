import Project from './project';
import TodoList from './list';
import Task from './task';

export default class Storage {

  static saveList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getList() {
    const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todoList')));

    todoList.setProjects(
      todoList.getProjects().map((project) => Object.assign(new Project(), project))
    )

    todoList.getProjects().forEach((project) =>
      project.setProjectTasks(
        project.getProjectTasks().map((task) => Object.assign(new Task(), task))
      )
    )

    return todoList;
  }

  static clearStorage() {
    localStorage.clear();
  }

  static addTask(task) {
    const todoList = Storage.getList();
    todoList.addTask(task);
    // if(todoList.containingProject(task.getProjectConnected()) === false) Storage.addProject(new Project(`${task.getProjectConnected()}`))
    todoList.getProject(task.getProjectConnected()).addProjectTask(task);
    Storage.saveList(todoList);
  }

  static deleteTask(taskTitle) {
    const todoList = Storage.getList();
    if (todoList.containingTask(taskTitle)) {
      const task = todoList.getTask(taskTitle);
      todoList.deleteTask(task);
      todoList.getProject(task.projectConnected).deleteProjectTask(task);
    }
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