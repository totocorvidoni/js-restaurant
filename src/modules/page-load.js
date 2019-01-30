const pageLoad = () => {
  const header = document.querySelector('header');
  header.innerHTML = `
    <div class="logo">
      <i class="fas fa-mountain fa-5x"></i>
      <h1 >Valhalla</h1>
    </div>
    <p>If you are going to eat, mind as well do it with the gods.</p>
    `;
  about();
}

const about = () => {
  const content = document.querySelector('#content');
  content.innerHTML = `
    <h2>Pretium Sagittis</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
       tempor incididunt ut labore et dolore magna aliqua. Tristique senectus 
       et netus et malesuada fames ac turpis. Tristique sollicitudin nibh sit 
       amet commodo nulla facilisi nullam vehicula. Non tellus orci ac auctor 
       augue. Sit amet dictum sit amet justo donec enim diam. Morbi tincidunt 
       augue interdum velit.</p>
  `
}

export { pageLoad, about }