import Events from '../Events';

class ModalView {
  constructor(controller, parent) {
    this.controller = controller;

    this.modal = document.createElement('div');
    this.modalContent = document.createElement('div');
    this.modalLabel = document.createElement('label');
    this.modalInput = document.createElement('input');
    this.modalButton = document.createElement('button');

    this.modal.classList.add('modal');
    this.modal.classList.add('modal_hidden');
    this.modalContent.classList.add('modal__content');
    this.modalLabel.classList.add('modal__label');
    this.modalInput.classList.add('modal__input');
    this.modalButton.classList.add('modal__button');

    this.modalLabel.textContent = 'Enter new list name';
    this.modalLabel.setAttribute('for', 'list-name-input');
    this.modalInput.type = 'text';
    this.modalInput.id = 'list-name-input';
    this.modalButton.textContent = 'Add';

    this.modalContent.appendChild(this.modalLabel);
    this.modalContent.appendChild(this.modalInput);
    this.modalContent.appendChild(this.modalButton);
    this.modal.appendChild(this.modalContent);
    parent.appendChild(this.modal);

    this.modal.addEventListener('click', this.controller);
    Events.on('close modal', this.toggleAppear.bind(this));
  }

  toggleAppear() {
    this.modal.classList.toggle('modal_hidden');
    this.clearInput();
  }

  clearInput() {
    this.modalInput.value = '';
  }
}

export default ModalView;
