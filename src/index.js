import {pageLoad} from './modules/page-load';
import {renderAbout} from './modules/about';
import {renderMenu} from './modules/menu';
import {renderContact} from './modules/contact';

pageLoad();
renderAbout();

const goTo = (renderTab) => {
  document.querySelector('main').remove();
  renderTab();
}

const about = document.getElementById('about');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

about.addEventListener('click', () => goTo(renderAbout));
menu.addEventListener('click', () => goTo(renderMenu));
contact.addEventListener('click', () => goTo(renderContact));
