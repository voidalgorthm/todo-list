import Task from './task';
import Forms from './forms';

function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/));

const initializePage = (() => {

  const _createHeading = (text, num = 4) => {
    const heading = document.createElement(`h${num}`);
    heading.textContent = text;
    return heading;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createBtn = (label, type = 'button') => {
    const button = document.createElement('button');
    button.setAttribute('id', label);
    const content = capitalize(label);
    button.textContent = content;
    button.classList.add(`${type}`);
    return button;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    container.append(...elements);
    return container;
  }

  const _initializeHeader = () => {
    const header = document.querySelector('header');
    header.setAttribute('id', 'header');

    const appTitle = _createHeading('Todo-List', '1');
    const primaryIcon = _createIcon('1.png');
    const logoContainer = _createContainer(primaryIcon, appTitle);

    const searchIcon = _createIcon('2.png');
    const input = document.createElement('input');
    setKeyValue(input, { type: 'search', id: 'search' , name: 'search' });
    const searchContainer = _createContainer(searchIcon, input);

    const account = _createBtn('account', 'button');
    const signout = _createBtn('signout', 'special');
    const acctContainer = _createContainer(account, signout);

    logoContainer.classList.add('gap');
    searchContainer.classList.add('gap');
    acctContainer.classList.add('gap');
    header.append(logoContainer, searchContainer, acctContainer);
    header.classList.add('flex-row');
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const control = document.createElement('div');
    control.setAttribute('id', 'nav-control');
    const collapseControl = _createIcon('3.png');
    control.append(collapseControl);

    const defaultProjects = document.createElement('div');
    defaultProjects.setAttribute('id', 'projects-default');
    const today = _createBtn('today', 'menu');
    today.classList.add('active');
    const tomorrow = _createBtn('tomorrow', 'menu');
    const upcoming = _createBtn('upcoming', 'menu');

    defaultProjects.append(today, tomorrow, upcoming);
    defaultProjects.classList.add('flex-column');

    const userProjectsTitle = _createHeading('Projects', '2');
    
    const userProjects = document.createElement('div');
    userProjects.setAttribute('id', 'projects-user');
    userProjects.textContent = 'GIT GUD';
    const addProject = _createBtn('project-add', 'button');

    nav.append(control, defaultProjects, userProjectsTitle, userProjects, addProject);

    // nav.classList.add('flex-column');
    // nav.classList.add('evenly');
    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = _createHeading('TITLE', 3);
    setKeyValue(contentTitle, {id: 'content-title'});
    const contentHeader = _createContainer(contentTitle);
    const sortEmpty1 = _createHeading('', 4);
    const sortTitle = _createHeading('title', 4);
    const sortDate = _createHeading('date', 4);
    const sortEmpty2 = _createHeading('', 4);
    const sortEmpty3 = _createHeading('', 4);
    const contentAttributes = _createContainer(sortEmpty1, sortTitle, sortDate, sortEmpty2, sortEmpty3);
    setKeyValue(contentAttributes, {id: 'content-attributes'});
    const contentItems = document.createElement('div');
    setKeyValue(contentItems, {id: 'content-items'});
    contentItems.classList.add('flex-column');
    contentItems.classList.add('gap');
    const addTaskButton = _createBtn('task-add', 'button');
    addTaskButton.addEventListener('click', () => {
      const blankTask = new Task();
      contentItems.append(Forms.editTask(blankTask));
    });
    
    main.append(contentHeader, contentAttributes, contentItems, addTaskButton);
    main.classList.add('gap');
    return main;
  }

  document.body.classList.add('flex-column');
  _initializeHeader();
  _initializeNav();
  _initializeMain();
})();

export default initializePage;

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }