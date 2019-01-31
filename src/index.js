import {pageLoad} from './modules/page-load';
import {renderAbout} from './modules/about';
import {renderMenu} from './modules/menu';
import {renderContact} from './modules/contact';
import {goToTab, setActive} from './modules/navigator.js'

pageLoad();
renderAbout();

const about = document.getElementById('about');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

about.addEventListener('click', function() {
  setActive(this);
  goToTab(renderAbout);
});
menu.addEventListener('click', function() {
  setActive(this);
  goToTab(renderMenu);
});
contact.addEventListener('click', function() {
  setActive(this);
  goToTab(renderContact);
});
