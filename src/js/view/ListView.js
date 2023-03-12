class ListView {
  constructor(controller, parent) {
    this.controller = controller;

    this.listContainer = document.createElement('div');
    this.listContainer.classList.add('list-container');

    this.title = document.createElement('h1');
    this.title.classList.add('title');
    this.title.textContent = this.controller.modelListName;

    this.list = document.createElement('ul');
    this.list.classList.add('todo-list');
    this.controller.modelList.forEach((task) => {
      const listItem = document.createElement('li');
      const checkButton = document.createElement('input');
      const todoContent = document.createElement('div');
      const todoText = document.createElement('p');
      const todoState = document.createElement('div');
      const todoDueDate = document.createElement('div');

      listItem.classList.add('todo-list__item', 'todo');
      checkButton.classList.add('todo__check-button');
      todoContent.classList.add('todo__content');
      todoText.classList.add('todo__text');
      todoState.classList.add('todo__state');
      todoDueDate.classList.add('todo__due-date');

      checkButton.type = 'checkbox';
      todoText.textContent = task.text;
      todoDueDate.textContent = task.dueDate ?? '';

      listItem.appendChild(checkButton);
      listItem.appendChild(todoContent);
      todoContent.appendChild(todoText);
      todoContent.appendChild(todoState);
      todoState.appendChild(todoDueDate);
      this.list.appendChild(listItem);
    });

    this.listContainer.appendChild(this.title);
    this.listContainer.appendChild(this.list);
    parent.appendChild(this.listContainer);
  }
}

export default ListView;
