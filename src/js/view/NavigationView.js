import Events from '../Events';

class NavigationView {
  constructor(controller, parent) {
    this.controller = controller;

    this.navigation = document.createElement('nav');
    this.navigationLists = document.createElement('ul');
    this.controller.modelListNames.forEach((listName) => this.createListLink(listName));

    this.navigation.classList.add('navigation');
    this.navigationLists.classList.add('navigation__lists');

    this.navigationLists.setAttribute('aria-label', 'Lists');

    this.navigation.appendChild(this.navigationLists);
    parent.appendChild(this.navigation);

    Events.on('list added', this.render.bind(this));
    this.navigation.addEventListener('click', this.controller);
  }

  createListLink(listName) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.classList.add('navigation__sublink');

    const listNameWithoutSpaces = listName.replaceAll(' ', '-').toLowerCase();
    a.href = `/${listNameWithoutSpaces}`;
    a.textContent = listName;
    a.setAttribute('data-list-name', listNameWithoutSpaces);

    li.appendChild(a);

    this.navigationLists.appendChild(li);
  }

  clearNavigationLists() {
    this.navigationLists.innerHTML = '';
  }

  render() {
    this.clearNavigationLists();
    this.controller.modelListNames.forEach((listName) => this.createListLink(listName));
  }
}

export default NavigationView;
