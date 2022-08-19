import Storage from './storage';

const initializePage = (() => {

  const _createHeading = (id, text, num = 4) => {
    const heading = document.createElement(`h${num}`);
    heading.setAttribute('id', id);
    heading.textContent = text;
    return heading;
  }

  const _createBtn = (label, type = 'control', ...classes) => {
    const button = document.createElement('button');
    button.setAttribute('id', label);
    button.classList.add(`${type}`);
    const icon = document.createElement('i');
    classes.forEach(cls => {
      Object.values(cls).forEach(value => icon.classList.add(value));
    });
    const content = capitalize(label);
    const title = document.createElement('h3');
    title.textContent = content;
    if (type === 'special') button.append(icon);
    else button.append(icon, title);
    return button;
  }

  /* const _createLabel = (labeled) => {
    const label = document.createElement('label');
    setKeyValue(label, { id: `label-${labeled}`, for: `${labeled}` });
    // label.classList.add('hidden');
    // label.textContent = labeled;
    return label;
  } */

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('sort-attrib');
    container.append(...elements);
    return container;
  }

  const _initializeHeader = () => {
    const header = document.querySelector('header');
    header.setAttribute('id', 'header');

    const title = _createHeading('title', 'Todo-List', '1');
    const icon = document.createElement('i');
    icon.setAttribute('id', 'icon');
    icon.classList.add('fas', 'fa-table-list');
    const leftHeader = document.createElement('div');
    leftHeader.setAttribute('id', 'left-header');
    leftHeader.append(icon, title);

    /* const searchIcon = _createIcon('2.png');
    const input = document.createElement('input');
    setKeyValue(input, { type: 'search', id: 'search', name: 'search' });
    const searchContainer = _createContainer(searchIcon, input); */

    const local = _createBtn('local', 'special');
    local.addEventListener('click', () => {
      console.log(Storage.showStorage());
    });
    const toggle = _createBtn('nav-control', 'special', ['fas', 'fa-square-caret-down']);
    toggle.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('media');
      document.querySelector('#nav-control').classList.toggle('rotate');
    });
    const rightHeader = document.createElement('div');
    rightHeader.append(local, toggle);
    rightHeader.setAttribute('id', 'right-header');

    // searchContainer.classList.add('gap');
    header.append(leftHeader, rightHeader);
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const filterProjects = document.createElement('div');
    filterProjects.setAttribute('id', 'projects-filter');

    const home = _createBtn('home', 'menu', ['fas', 'fa-house']);
    const today = _createBtn('today', 'menu', ['fas', 'fa-calendar-day']);
    const week = _createBtn('week', 'menu', ['fas', 'fa-calendar-week']);
    const upcoming = _createBtn('upcoming', 'menu', ['fas', 'fa-calendar-days']);

    filterProjects.append(home, today, week, upcoming);

    const userProjectsLabel = _createHeading('projects-title', 'Projects', '2');
    const userProjectsContents = document.createElement('div');
    userProjectsContents.setAttribute('id', 'projects-user');
    const addProject = _createBtn('add-project', 'control', ['fa-solid', 'fa-folder-plus']);

    nav.append(filterProjects, userProjectsLabel, userProjectsContents, addProject);

    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = _createHeading('content-title', 'Home', 3);
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('id', 'content-title-container');
    titleContainer.classList.add('center');
    titleContainer.append(contentTitle);

    const sortEmpty = _createHeading('sort-check', '', 4);
    const sortOne = _createContainer(sortEmpty);
    sortOne.classList.add('hidden')
    const sortTitle = _createHeading('sort-title', 'Title', 4);
    const sortTwo = _createContainer(sortTitle);
    const sortDate = _createHeading('sort-date', 'Date', 4);
    const sortThree = _createContainer(sortDate);
    const contentAttributes = document.createElement('div');
    contentAttributes.append(sortOne, sortTwo, sortThree);
    setKeyValue(contentAttributes, { id: 'content-attributes' });

    const content = document.createElement('div');
    setKeyValue(content, { id: 'content' });
    const contentItems = document.createElement('div');
    setKeyValue(contentItems, { id: 'content-items' });
    const addTask = _createBtn('add-task', 'control', ['fas', 'fa-calendar-plus']);
    content.append(contentItems, addTask);

    main.append(titleContainer, contentAttributes, content);
    main.classList.add('gap');
    return main;
  }

  _initializeHeader();
  _initializeNav();
  _initializeMain();
})();

export default initializePage;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }