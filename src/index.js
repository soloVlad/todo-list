import Footer from './js/view/FooterView';

import NavigationModel from './js/model/NavigationModel';
import NavigationController from './js/controller/NavigationController';
import NavigationView from './js/view/NavigationView';

import ListModel from './js/model/ListModel';
import ListController from './js/controller/ListController';
import ListView from './js/view/ListView';

const main = document.createElement('main');
main.classList.add('main');

const navigationModel = new NavigationModel();
const navigationController = new NavigationController(navigationModel);
const navigationVew = new NavigationView(navigationController, main);

const listModel = new ListModel('first');
const listController = new ListController(listModel);
const listView = new ListView(listController, main);

document.body.appendChild(main);
const footerView = new Footer(document.body);
