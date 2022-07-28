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
    // container.classList.add('padd');
    elements.forEach(item => container.appendChild(item));
    return container;
  }

/*   const _createContent = (...content) => {
    const container = document.createElement('div');
    console.log(content);
    content.forEach(item => container.append(item));
    container.classList.add('flex-center');
    container.classList.add('padd');
    container.classList.add('gap');
    return container;
  } */

  const _initializeHeader = (text) => {
    const header = document.querySelector('header');
    header.setAttribute('id', 'header');

    const appTitle = _createHeading(text, '1');
    const primaryIcon = _createIcon('1.png');
    const logoContainer = _createContainer(primaryIcon, appTitle);

    const searchIcon = _createIcon('2.png');
    const input = document.createElement('input');
    setAttributes(input, { type: 'search', id: 'search' , name: 'search' });
    const searchContainer = _createContainer(searchIcon, input);

    const account = _createBtn('account', 'btn');
    const signout = _createBtn('signout', 'special');
    const acctContainer = _createContainer(account, signout);

    header.appendChild(logoContainer);
    header.appendChild(searchContainer);
    header.appendChild(acctContainer);
    header.classList.add('flex-row');
    return header;
  }

  const _initializeNav = (text) => {
    const nav = document.querySelector('section').querySelector('nav');
    nav.setAttribute('id', 'nav');

    const control = document.createElement('div');
    control.setAttribute('id', 'nav-control');
    const collapseControl = _createIcon('3.png');
    control.append(collapseControl);

    const normal = document.createElement('div');
    normal.setAttribute('id', 'tasks-list');
    const today = _createBtn('today', 'menu');
    today.classList.add('active');
    const tomorrow = _createBtn('tomorrow', 'menu');
    const upcoming = _createBtn('upcoming', 'menu');

    normal.appendChild(today);
    normal.appendChild(tomorrow);
    normal.appendChild(upcoming);
    normal.classList.add('flex-column');

    const projectsTitle = _createHeading(text, '2');
    
    const projects = document.createElement('div');
    projects.setAttribute('id', 'projects-list');
    projects.textContent = 'GIT GUD';

    const addProject = _createBtn('project-add', 'btn');

    nav.append(control, normal, projectsTitle, projects, addProject);

    nav.classList.add('flex-column');
    // nav.classList.add('evenly');
    return nav;
  }

  const _initializeMain = () => {
    const main = document.querySelector('section').querySelector('main');
    main.setAttribute('id', 'main');
    return main;
  }

  _initializeHeader('Todo-List');
  _initializeNav('Projects');
  _initializeMain();
})();

export default initializePage;

function capitalize(string) { return string.charAt(0).toUpperCase() + string.slice(1); }
function setAttributes(elem, attrs) { Object.entries(attrs).forEach(([key, value]) => elem.setAttribute(key, value)); }