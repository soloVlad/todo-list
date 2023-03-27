import FullList from '../FullList';
import Events from '../Events';

class ModalController {
  // EventListener interface
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        this.handleClick(e.target);
        break;
      default:
        console.log(e.target);
    }
  }

  handleClick(target) {
    if (target.classList.contains('modal__button')) {
      const listName = target.parentElement.querySelector('#list-name-input').value;
      FullList.addList(listName);
      Events.emit('close modal');
    }
  }
}

export default ModalController;
