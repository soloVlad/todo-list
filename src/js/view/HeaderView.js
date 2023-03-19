class HeaderView {
  constructor(parent) {
    this.header = document.createElement('header');
    this.logoContainer = document.createElement('div');
    this.logoIcon = document.createElement('img');
    this.logoText = document.createElement('h1');
    this.headerButton = document.createElement('button');

    this.header.classList.add('header');
    this.logoContainer.classList.add('header__logo', 'logo');
    this.logoIcon.classList.add('logo__icon');
    this.logoText.classList.add('logo__text');
    this.headerButton.classList.add('header__button');

    this.logoText.textContent = 'Tasker';
    // TODO: find logo icon and import

    this.header.appendChild(this.logoContainer);
    this.header.appendChild(this.headerButton);
    this.logoContainer.appendChild(this.logoIcon);
    this.logoContainer.appendChild(this.logoText);
    parent.appendChild(this.header);
  }
}

export default HeaderView;
