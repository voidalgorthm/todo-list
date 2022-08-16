import Storage from './storage';
import Interface from './interface';

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

  const _createBtn = (label, type = 'control') => {
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

    /* const searchIcon = _createIcon('2.png');
    const input = document.createElement('input');
    setKeyValue(input, { type: 'search', id: 'search', name: 'search' });
    const searchContainer = _createContainer(searchIcon, input); */

    const local = _createBtn('local', 'control');
    local.addEventListener('click', () => {
      console.log(Storage.showStorage());
    });
    const toggle = _createBtn('toggle', 'special');
    toggle.classList.add('navToggle');
    toggle.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('media');
    });
    const acctContainer = _createContainer(local, toggle);

    logoContainer.classList.add('gap');
    // searchContainer.classList.add('gap');
    acctContainer.classList.add('gap');
    header.append(logoContainer, acctContainer);
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const control = document.createElement('div');
    control.setAttribute('id', 'nav-control');
    const collapseControl = _createIcon('3.png');
    control.append(collapseControl);

    const filterProjects = document.createElement('div');
    filterProjects.setAttribute('id', 'projects-filter');
    const home = _createBtn('home', 'menu');
    const today = _createBtn('today', 'menu');
    const week = _createBtn('week', 'menu');
    const upcoming = _createBtn('upcoming', 'menu');

    filterProjects.append(home, today, week, upcoming);
    filterProjects.classList.add('flex-column');
    filterProjects.classList.add('gap');

    const userProjects = document.createElement('div');
    userProjects.setAttribute('id', 'projects');
    userProjects.classList.add('grid');
    userProjects.classList.add('gap');

    const userProjectsLabel = _createHeading('Projects', '2');
    const userProjectsContents = document.createElement('div');
    userProjectsContents.setAttribute('id', 'projects-user');
    userProjectsContents.classList.add('grid');
    userProjectsContents.classList.add('gap');
    const addProject = _createBtn('project-add', 'button');
    userProjects.append(userProjectsLabel, userProjectsContents, addProject);

    nav.append(control, filterProjects, userProjects);

    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = _createHeading('Home', 3);
    setKeyValue(contentTitle, { id: 'content-title' });
    const contentHeader = _createContainer(contentTitle);

    const sortEmpty = _createHeading('', 4);
    const sortOne = _createContainer(sortEmpty);
    sortOne.classList.add('sortHidden')
    const sortTitle = _createHeading('title', 4);
    const sortTwo = _createContainer(sortTitle);
    const sortDate = _createHeading('date', 4);
    const sortThree = _createContainer(sortDate);
    const contentAttributes = document.createElement('div');
    contentAttributes.append(sortOne, sortTwo, sortThree);
    setKeyValue(contentAttributes, { id: 'content-attributes' });
    contentAttributes.classList.add('grid');
    contentAttributes.classList.add('gap');

    const content = document.createElement('div');
    setKeyValue(content, { id: 'content' });
    content.classList.add('flex-column');
    content.classList.add('gap');
    const contentItems = document.createElement('div');
    setKeyValue(contentItems, { id: 'content-items' });
    contentItems.classList.add('flex-column');
    contentItems.classList.add('gap');
    const addTask = _createBtn('task-add', 'control');
    content.append(contentItems, addTask);

    main.append(contentHeader, contentAttributes, content);
    main.classList.add('gap');
    return main;
  }

  _initializeHeader();
  _initializeNav();
  _initializeMain();
})();

export default initializePage;

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }