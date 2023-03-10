class NavigationView {
  constructor(controller, parent) {
    this.controller = controller;

    this.navigation = document.createElement('nav');
    this.navigationAll = document.createElement('a');
    this.navigationToday = document.createElement('a');
    this.navigationLists = document.createElement('ul');
    this.controller.modelListNames.forEach((listName) => this.createListLink(listName));

    this.navigation.classList.add('navigation');
    this.navigationAll.classList.add('navigation__link');
    this.navigationToday.classList.add('navigation__link');
    this.navigationLists.classList.add('navigation__lists');

    this.navigationAll.textContent = 'all';
    this.navigationToday.textContent = 'today';
    this.navigationLists.setAttribute('aria-label', 'Lists');

    this.navigation.appendChild(this.navigationAll);
    this.navigation.appendChild(this.navigationToday);
    this.navigation.appendChild(this.navigationLists);
    parent.appendChild(this.navigation);
  }

  createListLink(listName) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.classList.add('navigation__sublink');

    a.href = '#';
    console.log(listName);
    a.textContent = listName;

    li.appendChild(a);

    this.navigationLists.appendChild(li);
  }
}

export default NavigationView;
