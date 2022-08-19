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

  const _createBtn = (label, type = 'control', ...classes) => {
    const button = document.createElement('button');
    button.setAttribute('id', label);
    button.classList.add(`${type}`);
    const icon = document.createElement('i');
    classes.forEach(cls => {
      Object.values(cls).forEach(value => icon.classList.add(value));
    });
    const content = capitalize(label);
    const title = document.createElement('h4');
    title.textContent = content;
    button.append(icon, title);
    return button;
  }

  const _createLabel = (labeled) => {
    const label = document.createElement('label');
    setKeyValue(label, { id: `label-${labeled}`, for: `${labeled}` });
    // label.classList.add('hidden');
    // label.textContent = labeled;
    return label;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    if (elements.length === 1) container.classList.add('flex-center');
    else container.classList.add('flex-row', 'between', 'gap');
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

    const local = _createBtn('local', 'special');
    local.addEventListener('click', () => {
      console.log(Storage.showStorage());
    });
    const toggle = _createBtn('toggle', 'special');
    toggle.classList.add('nav-control');
    toggle.addEventListener('click', () => {
      document.querySelector('nav').classList.toggle('media');
    });
    const acctContainer = _createContainer(local, toggle);

    // searchContainer.classList.add('gap');
    header.append(logoContainer, acctContainer);
    return header;
  }

  const _initializeNav = () => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const filterProjects = document.createElement('div');
    filterProjects.setAttribute('id', 'projects-filter');

    const home = _createBtn('home', 'menu', ['fas', 'fa-house', 'fa-lg']);
    const today = _createBtn('today', 'menu', ['fas', 'fa-calendar-day', 'fa-lg']);
    const week = _createBtn('week', 'menu', ['fas', 'fa-calendar-week', 'fa-lg']);
    const upcoming = _createBtn('upcoming', 'menu', ['fas', 'fa-calendar-days', 'fa-lg']);

    filterProjects.append(home, today, week, upcoming);
    filterProjects.classList.add('flex-column');
    filterProjects.classList.add('gap');

    const userProjectsLabel = _createHeading('Projects', '2');
    const userProjectsContents = document.createElement('div');
    userProjectsContents.setAttribute('id', 'projects-user');
    userProjectsContents.classList.add('grid');
    userProjectsContents.classList.add('gap');
    const addProject = _createBtn('add-project', 'control', ['fa-solid', 'fa-folder-plus', 'fa-lg']);

    nav.append(filterProjects, userProjectsLabel, userProjectsContents, addProject);

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
    sortOne.classList.add('hidden')
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
    const addTask = _createBtn('add-task', 'control');
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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function setKeyValue(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }