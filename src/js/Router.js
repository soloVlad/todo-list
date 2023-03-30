import ListModel from './model/ListModel';
import ListController from './controller/ListController';
import ListView from './view/ListView';
import FullList from './FullList';

const Route = (e) => {
  const event = e || window.event;
  event.preventDefault();
  window.history.pushState({}, '', event.target.href);
  handleLocation();
};

const handleLocation = () => {
  const { pathname } = window.location;
  const indexOfLastSlash = pathname.lastIndexOf('/');
  const path = pathname.substring(indexOfLastSlash + 1);
  const main = document.querySelector('main');

  const listContainer = document.querySelector('.list-container');
  if (listContainer) {
    listContainer.parentElement.removeChild(listContainer);
  }

  if (FullList.getByListName(path)) {
    const listModel = new ListModel(path);
    const listController = new ListController(listModel);
    const listView = new ListView(listController, document.querySelector('main'));
  }
};

export { Route, handleLocation };
