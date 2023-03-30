import { handleLocation } from './js/Router';

import HeaderView from './js/view/HeaderView';
import HeaderController from './js/controller/HeaderController';
import FooterView from './js/view/FooterView';

import ModalController from './js/controller/ModalController';
import ModalView from './js/view/ModalView';

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

const modalController = new ModalController();
const modalView = new ModalView(modalController, document.body);

const headerController = new HeaderController(modalView);
const headerView = new HeaderView(headerController, document.body);
document.body.appendChild(main);
const footerView = new FooterView(document.body);

window.onpopstate = handleLocation;

handleLocation();
