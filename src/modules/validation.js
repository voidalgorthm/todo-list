import Storage from './storage';

export default class Validation {

  static confirmDeleteTask = () => {
    return confirm('Are you sure you want to delete this task?');
  }

  static confirmDeleteProject = () => {
    return confirm('Are you sure you want to delete this project?');
  }

  static validateFromInputs = (form) => {
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focusout', (event) => {
        if (event.target.classList.contains('editTaskTitle')) Validation.checkEditTitle();
        else if (event.target.classList.contains('editTaskDate')) Validation.checkEditDate();
      });
    });
  }

  static isEmpty = value => value === '' ? true : false;
  static isNotBetween = (length, min, max) => min > length || length < max ? false : true;
  static isValid = (value, pattern) => pattern.test(value) ? true : false;

  static checkEditTitle = () => {
    const titleInput = document.querySelector('.editTaskTitle');
    let valid = false;
    const min = 1, max = 20;
    const title = titleInput.value.trim();
    const regex = /^[A-Za-z0-9\s]+[A-Za-z0-9\s]+$(\.0-9+)?/g;

    if (this.isEmpty(title)) alert('Title cannot be blank.');
    else if (this.isNotBetween(title.length, min, max)) alert(`Title must be between ${min} and ${max} characters.`);
    else if (!this.isValid(title, regex)) alert(`Title must be in alphanumeric pattern.`);
    else valid = true;

    return valid;
  };

  static checkEditDate = () => {
    const dateInput = document.querySelector('.editTaskDate');
    let valid = false;
    const date = dateInput.value.trim();
    const regex = /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/;

    if (!date) valid = true;
    else if (!this.isValid(date, regex)) alert(`Date must be a valid that is between 01/01/1900 to 12/31/2099.`)
    else valid = true;

    return valid;
  };

}