const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navbar"></div>
  <div id="header"></div>
  <div id="card-container"></div>`;
};

export default domBuilder;
