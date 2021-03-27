const bookCards = (array) => {
  document.querySelector('#card-container').innerHTML = '';

  /*
  eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]
  */

  array[0].forEach((book) => {
    document.querySelector('#card-container').innerHTML += `
    <div class="card bookCard" id="book-card^^${book._id}" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${book.name}</h5>
    <div id="chapters-body"></div>
    <button class="btn btn-outline-light" id="book-card^^${book._id}">see chapters</button>
  </div>
</div>`;
  });
};

export default bookCards;
