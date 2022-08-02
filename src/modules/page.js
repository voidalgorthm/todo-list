function importIcons(r) {
  let icons = {};
  r.keys().map((item, index) => { icons[item.replace('../assets/icons/', '')] = r(item); });
  return icons;
}

const icons = importIcons(require.context('../assets/icons/', false, /\.(png|jpe?g|svg)$/));

const initializePage = (() => {

  const _createParagraph = (text) => {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
  }

  const _createHeading = (text, num = 4) => {
    const heading = document.createElement(`h${num}`);
    heading.textContent = text;
    return heading;
  }

  const _createLink = (lnk, text) => {
    const link = document.createElement('a');
    link.href = lnk;
    const txt = document.createTextNode(text);
    link.appendChild(txt);
    return link;
  }

  const _createIcon = (source) => {
    const icon = document.createElement('img');
    icon.alt = `an icon of ${source}`;
    icon.src = icons[`./${source}`];
    return icon;
  }

  const _createBtn = (label, type = 'btn') => {
    const btn = document.createElement('button');
    btn.setAttribute('id', label);
    const content = capitalize(label);
    btn.textContent = content;
    btn.classList.add(`${type}`);
    return btn;
  }

  const _createContainer = (...elements) => {
    const container = document.createElement('div');
    container.classList.add('flex-center');
    elements.forEach(item => container.appendChild(item));
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
    setAttributes(input, { type: 'search', id: 'search' , name: 'search' });
    const searchContainer = _createContainer(searchIcon, input);

    const account = _createBtn('account', 'btn');
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
    const addProject = _createBtn('project-add', 'btn');

    nav.append(control, defaultProjects, userProjectsTitle, userProjects, addProject);

    // nav.classList.add('flex-column');
    // nav.classList.add('evenly');
    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    const contentTitle = document.createElement('h3');
    contentTitle.textContent = 'title';
    setAttributes(contentTitle, {id: 'content-title'});
    const contentItems = document.createElement('div');
    contentItems.textContent = 'projects';
    setAttributes(contentItems, {id: 'content-items'});
    main.append(contentTitle, contentItems);
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
function setAttributes(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }