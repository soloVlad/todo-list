import gitHubIcon from '../../img/github.svg';

class FooterView {
  constructor(parent) {
    this.footer = document.createElement('footer');
    this.footerLink = document.createElement('a');
    this.footerIcon = document.createElement('img');
    this.footerText = document.createElement('span');

    this.footer.classList.add('footer');
    this.footerLink.classList.add('footer__link');
    this.footerIcon.classList.add('footer__icon');
    this.footerText.classList.add('footer__text');

    this.footerLink.href = 'https://github.com/soloVlad/todo-list';
    this.footerText.textContent = '@soloVlad';
    this.footerIcon.src = gitHubIcon;

    this.footer.appendChild(this.footerLink);
    this.footerLink.appendChild(this.footerText);
    this.footerLink.appendChild(this.footerIcon);
    parent.appendChild(this.footer);
  }
}

export default FooterView;
