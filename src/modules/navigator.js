const goToTab = (renderTab) => {
  document.querySelector('main').remove();
  renderTab();
}

const setActive = (element) => {
  let navs = document.querySelectorAll('nav a');
  navs.forEach(nav => nav.className = '');
  element.className = 'active';
}

export {goToTab, setActive}