import { Route } from '../Router';

class NavigationController {
  constructor(model) {
    this.model = model;
  }

  get modelListNames() {
    return this.model.lists;
  }

  // EventListener interface
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        this.clickHandler(e);
        break;
      default:
        console.log(e.target);
    }
  }

  clickHandler(event) {
    if (!event.target.classList.contains('navigation__link') && !event.target.classList.contains('navigation__sublink')) return;
    const listName = event.target.getAttribute('data-list-name');
    Route(event);
  }
}

export default NavigationController;
