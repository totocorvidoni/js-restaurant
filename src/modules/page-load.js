const pageLoad = () => {
  const content = document.querySelector('#content');
  // render header
  let header = document.createElement('header');
  let logoContainer = document.createElement('div');
  logoContainer.id = 'logo';
  let logo = document.createElement('img');
  logo.setAttribute('src', 'images/w-logo.svg')
  logoContainer.appendChild(logo);
  let name = document.createElement('h1');
  name.appendChild(document.createTextNode('Valhalla'));
  logoContainer.appendChild(name);
  let subText = document.createElement('p');
  subText.appendChild(document.createTextNode('If you are going to eat, mind as well do it with the gods.'));
  header.appendChild(logoContainer);
  header.appendChild(subText);
  content.appendChild(header);

  // render nav
  let nav = document.createElement('nav');
  let about = document.createElement('a');
  about.setAttribute('href', '#');
  about.id = 'about';
  about.appendChild(document.createTextNode('ABOUT US'));
  let menu = document.createElement('a');
  menu.setAttribute('href', '#');
  menu.id = 'menu';
  menu.appendChild(document.createTextNode('MENU'));
  let contact = document.createElement('a');
  contact.setAttribute('href', '#');
  contact.id = 'contact';
  contact.appendChild(document.createTextNode('CONTACT'));
  nav.appendChild(about);
  nav.appendChild(menu);
  nav.appendChild(contact);
  content.appendChild(nav);
  // about();
}

export { pageLoad }