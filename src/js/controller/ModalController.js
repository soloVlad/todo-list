import FullList from '../FullList';
import Events from '../Events';
import { handleLocation } from '../Router';

class ModalController {
  // EventListener interface
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        this.handleClick(e.target);
        break;
      case 'keypress':
        this.handleKeypress(e);
        break;
      default:
        console.log(e.target);
    }
  }

  handleClick(target) {
    if (target.classList.contains('modal')) {
      Events.emit('close modal');
    } else if (target.classList.contains('modal__button')) {
      this.handleListAdd();
    }
  }

  handleKeypress(event) {
    if (event.key === 'Enter') {
      this.handleListAdd();
    }
  }

  handleListAdd() {
    const listName = document.querySelector('#list-name-input').value;
    FullList.addList(listName);
    Events.emit('close modal');
    document.querySelector(`[data-list-name=${listName}]`).click();
  }
}

export default ModalController;
