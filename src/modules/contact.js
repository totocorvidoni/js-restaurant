const renderContact = () => {
  const content = document.querySelector('#content');
  let main = document.createElement('main');
  let heading = document.createElement('h2');
  heading.appendChild(document.createTextNode('Contact Info'));
  let p = document.createElement('p');
  let text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada fames ac turpis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Non tellus orci ac auctor augue. Sit amet dictum sit amet justo donec enim diam. Morbi tincidunt augue interdum velit.');
  p.appendChild(text);
  main.appendChild(heading);
  main.appendChild(p);
  content.appendChild(main);
}

export {renderContact}